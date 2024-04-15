import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import pickBy from 'lodash/pickBy'
import pick from 'lodash/pick'
import omit from 'lodash/omit'

import { createUser } from '../../api/user'
import { validateForm } from './helpers'

import useModal from '../../hooks/useModal'
import useLocalStorage from '../../hooks/useLocalStorage'

import Field from '../Field'
import FieldInputTrap from '../FieldInputTrap'
import FieldLabel from '../FieldLabel'
import FieldTextArea from '../FieldTextArea'
import Button from '../Button'
import toasts from '../Toast'
import Fade from '../Fade'
import SuccessMessage from './components/SuccessMessage'

import styles from './index.module.scss'

const capitalizeFirstLetter = (str: string) =>
  str.length > 0 ? [str[0].toUpperCase(), ...str.split('').slice(1)].join('') : str

export interface User {
  id: number
  firstName: string
  lastName: string
  fullName: string
  email: string
  company?: string
}

export interface ContactFormModel extends Omit<User, 'id' | 'fullName'> {
  comments: string
  confirmEmail?: string
}

interface ModalContent {
  title: string
  content: JSX.Element
}

const initialData: ContactFormModel = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  comments: '',
}

const ContactForm = () => {
  const ref = useRef<HTMLInputElement>(null)
  const refTextArea = useRef<HTMLTextAreaElement>(null)
  const [isWaiting, setIsWaiting] = useState(false)
  const [msg, setMessage] = useState<ModalContent>({
    title: '',
    content: <></>,
  })

  const modal = useModal()
  const [user, setUser] = useLocalStorage<User | null>('user')
  const formik = useFormik({
    initialValues: { ...initialData, ...pick(user, 'firstName', 'lastName', 'email', 'company') },
    validate: validateForm,
    onSubmit: values => send(values),
    enableReinitialize: true, // will fill in latest vals after reset
  })

  function handleSuccess(status: number, data: User) {
    if (status === 200 || status === 201) {
      setMessage({
        title: status === 201 ? 'Thanks for Visiting!' : 'Welcome Back!',
        content: <SuccessMessage name={capitalizeFirstLetter(data.fullName)} />,
      })
      modal.toggleIsVisible()
      setUser(omit(pickBy(data), 'exists') as User)
    } else if (status === 202) {
      // spambot
      toasts.success('Thank you for your comments')
    }
  }

  const send = async (model: ContactFormModel): Promise<void> => {
    setIsWaiting(true)
    try {
      const { data, status } = await createUser(model)
      handleSuccess(status, data)
      formik.handleReset(null)
    } catch (error: unknown) {
      toasts.error('Sorry, there was an error submitting this form.')
    } finally {
      setIsWaiting(false)
    }
  }

  useEffect(() => {
    user ? refTextArea.current?.focus() : ref.current?.focus()
  }, [])

  return (
    <Fade>
      <form autoFocus onSubmit={formik.handleSubmit} className={styles['contact-form']}>
        <div className={styles['contact-form__column']}>
          <div className={styles['contact-form__group']}>
            <Field
              ref={ref}
              id="firstName"
              name="firstName"
              type="text"
              label="First Name*"
              placeholder="First Name*"
              tabIndex={1}
              maxLength={25}
              error={!!formik.touched.firstName && !!formik.errors.firstName}
              msg={formik.errors.firstName}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            <Field
              id="lastName"
              name="lastName"
              type="text"
              label="Last Name*"
              placeholder="Last Name*"
              tabIndex={2}
              maxLength={25}
              error={!!formik.touched.lastName && !!formik.errors.lastName}
              msg={formik.errors.lastName}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>

          <Field
            id="email"
            name="email"
            type="email"
            label="Email*"
            placeholder="Email*"
            tabIndex={3}
            maxLength={40}
            error={!!formik.touched.email && !!formik.errors.email}
            msg={formik.errors.email}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />

          <Field
            id="company"
            name="company"
            type="text"
            label="Company"
            placeholder="Company"
            tabIndex={4}
            maxLength={25}
            error={false}
            msg={''}
            value={formik.values.company}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />

          <div className="confirmEmail">
            <FieldLabel id={'confirmEmail'} hideLabel={true}>
              Honeytrap
            </FieldLabel>
            <FieldInputTrap
              name="confirmEmail"
              type="text"
              value={formik.values.confirmEmail}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        <div className={styles['contact-form__column']}>
          <FieldTextArea
            id="comments"
            name="comments"
            ref={refTextArea}
            placeholder="Greetings, questions, comments...*"
            rows={7}
            cols={37}
            tabIndex={5}
            maxLength={275}
            value={formik.values.comments}
            msg={formik.errors.comments}
            error={!!formik.touched.comments && !!formik.errors.comments}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>

        <Button
          buttonType="button"
          type="submit"
          tabIndex={6}
          isLoading={isWaiting}
          className={styles['contact-form__btn-submit']}
        >
          Transmit
        </Button>
      </form>

      <modal.Modal
        isVisible={modal.isVisible}
        hideModal={modal.toggleIsVisible}
        content={msg.content}
        title={msg.title}
      />
    </Fade>
  )
}

export default ContactForm
