import { useEffect, useRef } from 'react'
import { FormikProps } from 'formik'

import Field from '../Field'
import FieldInputTrap from '../FieldInputTrap'
import FieldLabel from '../FieldLabel'
import FieldTextArea from '../FieldTextArea'
import Button from '../Button'
import Fade from '../Layout/Fade'

import { ContactFormModel } from '../ContactFormController'

import styles from './index.module.scss'

interface ContactFormProps {
  handler: FormikProps<ContactFormModel>
  isWaiting: boolean
}

const ContactForm = ({ handler, isWaiting }: ContactFormProps) => {
  const refNameInput = useRef<HTMLInputElement>(null)
  const refTextArea = useRef<HTMLTextAreaElement>(null)

  const { handleBlur, handleChange, handleSubmit, touched, values, errors } = handler
  const { firstName, lastName, email, company, confirmEmail, comments }: ContactFormModel = values
  const {
    firstName: firstNameError,
    lastName: lastNameError,
    email: emailError,
    comments: commentsError,
  } = errors
  const {
    firstName: firstNameTouched,
    lastName: lastNameTouched,
    email: emailTouched,
    comments: commentsTouched,
  } = touched

  useEffect(() => {
    firstName ? refTextArea.current?.focus() : refNameInput.current?.focus()
  }, [])

  return (
    <Fade>
      <form autoFocus onSubmit={handleSubmit} className={styles['contact-form']}>
        <div className={styles['contact-form__column']}>
          <div className={styles['contact-form__group']}>
            <Field
              ref={refNameInput}
              id="firstName"
              name="firstName"
              type="text"
              label="First Name*"
              placeholder="First Name*"
              tabIndex={1}
              maxLength={25}
              error={!!firstNameTouched && !!firstNameError}
              msg={firstNameError}
              value={firstName}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <Field
              id="lastName"
              name="lastName"
              type="text"
              label="Last Name*"
              placeholder="Last Name*"
              tabIndex={2}
              maxLength={25}
              error={!!lastNameTouched && !!lastNameError}
              msg={lastNameError}
              value={lastName}
              onBlur={handleBlur}
              onChange={handleChange}
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
            error={!!emailTouched && !!emailError}
            msg={emailError}
            value={email}
            onBlur={handleBlur}
            onChange={handleChange}
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
            value={company}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <div className="confirmEmail">
            <FieldLabel id={'confirmEmail'} hideLabel={true}>
              Honeytrap
            </FieldLabel>
            <FieldInputTrap name="confirmEmail" type="text" value={confirmEmail} onChange={handleChange} />
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
            value={comments}
            msg={commentsError}
            error={!!commentsTouched && !!commentsError}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>

        <Button
          buttonType="button"
          type="submit"
          tabIndex={6}
          disabled={isWaiting}
          isLoading={isWaiting}
          className={styles['contact-form__btn-submit']}
          data-testid="contact-submit-button"
        >
          Transmit
        </Button>
      </form>
    </Fade>
  )
}

export default ContactForm
