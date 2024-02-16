import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'

import { createUser } from '../../api/user'
import { validateForm } from './helpers'

import useModal from '../../hooks/useModal'

import Field from '../Field'
import FieldInputTrap from '../FieldInputTrap'
import FieldLabel from '../FieldLabel'
import FieldTextArea from '../FieldTextArea'
import Button from '../Button'
import toasts from '../Toast'
import Fade from '../Fade'

import styles from './index.module.scss'

const capitalizeFirstLetter = (str: string) =>
  str.length > 0 ? [str[0].toUpperCase(), ...str.split('').slice(1)].join('') : str

export interface ContactFormModel {
  firstName: string
  lastName: string
  email: string
  confirmEmail?: string
  company?: string
  comments: string
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

const SuccessMessage = ({ firstName }: { firstName: string }) => {
  return (
    <>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        Hello <strong style={{ color: '#eabb00', fontWeight: 'bold' }}>{firstName}</strong>,
      </p>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm leading-5">
        This form is wired up to a 🔥 <code>Firebase Firestore</code> NoSQL database on the backend and uses
        the <strong style={{ color: '#eabb00', fontWeight: 'bold' }}>formik</strong> validation library on the
        client. Source code is available at my{' '}
        <strong style={{ color: '#eabb00', fontWeight: 'bold' }}>GitHub</strong> repo.{' '}
        <a
          className="text-blue-500"
          href="https://github.com/jasoncsmith/React-Portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Check it out
        </a>
      </p>
    </>
  )
}

const ContactForm = () => {
  const modal = useModal()
  const formik = useFormik({
    initialValues: initialData,
    validate: validateForm,
    onSubmit: values => {
      send(values)
    },
  })
  const ref = useRef<HTMLInputElement>(null)
  const [msg, setMessage] = useState<ModalContent>({
    title: '',
    content: <></>,
  })
  const [isWaiting, setIsWaiting] = useState(false)

  const handleSuccess = (firstName: string, newUser: boolean): void => {
    setMessage({
      title: newUser ? 'Thanks for Visiting!' : 'Welcome Back!',
      content: <SuccessMessage firstName={capitalizeFirstLetter(firstName)} />,
    })
    modal.toggleIsVisible(true)
    reset()
  }

  const send = async (model: ContactFormModel): Promise<void> => {
    try {
      setIsWaiting(true)
      const { data, status } = await createUser(model)

      if (status === 200 || status === 201) {
        const fullName = data?.fullName
        handleSuccess(fullName, status === 201)
      } else {
        // spambot
        toasts.success('Thank you for your comments')
      }

      reset()
    } catch (error: any) {
      toasts.error('Sorry, there was an error submitting this form.')
    } finally {
      setIsWaiting(false)
    }
  }

  const reset = () => formik.handleReset(null)

  useEffect(() => {
    ref?.current?.focus()
  }, [ref])

  return (
    <Fade>
      <form
        // action="/webservices/form.php"
        // method="post"
        autoFocus
        onSubmit={formik.handleSubmit}
        className={styles['contact-form']}
      >
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
        title={msg.title}
        content={msg.content}
      />
    </Fade>
  )
}

export default ContactForm
