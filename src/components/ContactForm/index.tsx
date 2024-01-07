import { useFormik } from 'formik'
import { validateForm } from './helpers'
import { useState } from 'react'

import useModal from '../../hooks/useModal'

import './index.scss'

export interface ContactFormModel {
  firstName: string
  lastName: string
  email: string
  company?: string
  comments: string
}

interface ModalContent {
  title: string
  content: JSX.Element
}

const ContactModel: ContactFormModel = {
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
        Hello, <span style={{ color: '#eabb00', fontWeight: 'bold' }}>{firstName}</span>.
      </p>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm leading-5">
        This form is not hooked up to a backend api. It is just a demo. Styled with{' '}
        <strong style={{ color: '#eabb00', fontWeight: 'bold' }}>tailwindCSS</strong> and uses the{' '}
        <strong style={{ color: '#eabb00', fontWeight: 'bold' }}>formik</strong> validation library. Source code is
        available in my <strong style={{ color: '#eabb00', fontWeight: 'bold' }}>GitHub</strong> repo here:{' '}
        <a href="https://github.com/jasoncsmith/React-Portfolio" target="_blank" rel="noreferrer">
          Visit
        </a>
      </p>
    </>
  )
}

const ContactForm = () => {
  const modal = useModal()
  const formik = useFormik({
    initialValues: ContactModel,
    validate: validateForm,
    onSubmit: values => {
      send(values)
    },
  })
  const [msg, setMessage] = useState<ModalContent>({
    title: '',
    content: <></>,
  })

  const handleSuccess = ({ firstName }: ContactFormModel): void => {
    setMessage({
      title: 'Thanks for Visiting',
      content: <SuccessMessage firstName={firstName} />,
    })
    modal.toggleIsVisible(true)
    reset()
  }

  const send = (data: ContactFormModel): void => {
    handleSuccess(data)
  }

  const reset = () => formik.handleReset(null)

  return (
    <>
      <form
        // action="/webservices/form.php"
        autoFocus
        method="post"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-lcol">
          <div className="group">
            <div className="control-input">
              <label htmlFor="input-firstName">First Name</label>
              <input
                id="input-firstName"
                name="firstName"
                className={formik.touched.firstName && formik.errors.firstName ? 'input--is-invalid' : ''}
                type="text"
                maxLength={25}
                tabIndex={1}
                placeholder="First name*"
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <span className="validation-meassage--is-error">{formik.errors.firstName}</span>
              ) : null}
            </div>

            <div className="control-input">
              <label htmlFor="input-lastName">Last Name</label>
              <input
                id="input-lastName"
                name="lastName"
                className={formik.touched.lastName && formik.errors.lastName ? 'input--is-invalid' : ''}
                type="text"
                maxLength={25}
                tabIndex={2}
                placeholder="Last name*"
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <span className="validation-meassage--is-error">{formik.errors.lastName}</span>
              ) : null}
            </div>
          </div>

          <div className="control-input">
            <label htmlFor="input-email">Email</label>
            <input
              id="input-email"
              name="email"
              className={formik.touched.email && formik.errors.email ? 'input--is-invalid' : ''}
              type="email"
              maxLength={40}
              tabIndex={3}
              placeholder="Email*"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            {formik.touched.email && formik.errors.email ? (
              <span className="validation-meassage--is-error">{formik.errors.email}</span>
            ) : null}
          </div>

          <div className="control-input">
            <label htmlFor="input-company">Company</label>
            <input
              id="input-company"
              name="company"
              type="text"
              maxLength={40}
              tabIndex={4}
              placeholder="Company"
              value={formik.values.company}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>

          <div className="confirmEmail">
            <label htmlFor="input-confirmEmail">Honeytrap</label>
            <input id="input-confirmEmail" name="confirmEmail" type="text" maxLength={40} />
          </div>
        </div>

        <div className="form-rcol">
          <div className="control-textarea">
            <label htmlFor="textarea-comments">Comments</label>
            <textarea
              id="textarea-comments"
              name="comments"
              className={formik.touched.comments && formik.errors.comments ? 'input--is-invalid' : ''}
              rows={7}
              cols={37}
              placeholder="Greetings, questions, comments... *"
              tabIndex={5}
              maxLength={275}
              value={formik.values.comments}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.comments && formik.errors.comments ? (
              <span className="validation-meassage--is-error">{formik.errors.comments}</span>
            ) : null}
          </div>

          <button className="btn-submit" type="submit" tabIndex={6}>
            Transmit
          </button>
          <div className="loader"></div>
        </div>
      </form>

      <modal.Modal
        isVisible={modal.isVisible}
        hideModal={modal.toggleIsVisible}
        title={msg.title}
        content={msg.content}
      />
    </>
  )
}

export default ContactForm
