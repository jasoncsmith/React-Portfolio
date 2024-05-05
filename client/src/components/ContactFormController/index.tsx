import { useState } from 'react'
import { useFormik } from 'formik'
import { pick, omit } from 'lodash'

import { createUser } from '../../api/user'
import { validateForm } from '../ContactForm/helpers'
import { capitalizeFirstLetter } from '../../utilities/strings'
import useLocalStorage from '../../hooks/useLocalStorage'
import { sanitize } from '../../utilities/sanitize'

import ContactForm from '../ContactForm'
import SuccessMessage from '../ContactForm/components/SuccessMessage'
import Modal from '../Modal'
import toasts from '../Toast'

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

const initialData: ContactFormModel = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  comments: '',
  confirmEmail: '',
}

const ContactFormController = () => {
  const [isNewUser, setIsNewUser] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [user, setUser] = useLocalStorage<User | null>('user')
  const formik = useFormik({
    initialValues: { ...initialData, ...pick(user, 'firstName', 'lastName', 'email', 'company') },
    validate: validateForm,
    onSubmit: send,
    enableReinitialize: true, // will fill in latest vals after reset
  })

  function handleSuccess(status: number, data: User) {
    if (status === 200 || status === 201) {
      setUser(data)
      setIsNewUser(status === 201)
      setOpenModal(true)
    } else if (status === 202) {
      // spambot
      toasts.success('Thank you for your comments')
    }
  }

  async function send(model: ContactFormModel): Promise<void> {
    setIsWaiting(true)

    try {
      const payload = Object.fromEntries(
        Object.entries(model).map(([k, v]: Array<keyof ContactFormModel>) => [k, sanitize(v)])
      ) as {
        [K in keyof ContactFormModel]: string
      }

      const { data, status } = await createUser(payload)
      handleSuccess(status, omit(data))
      formik.handleReset(null)
    } catch (error: unknown) {
      toasts.error('Sorry, there was an error submitting this form.')
    } finally {
      setIsWaiting(false)
    }
  }

  return (
    <>
      {!openModal && <ContactForm handler={formik} isWaiting={isWaiting} />}

      <Modal>
        <Modal.ModalWindow modalId="contact" externalOpen={openModal} externalReset={setOpenModal}>
          <Modal.ModalTitle>{isNewUser ? 'Thanks for Visiting!' : 'Welcome Back!'}</Modal.ModalTitle>
          <Modal.ModalContent>
            <SuccessMessage name={user ? capitalizeFirstLetter(user.fullName) : ''} />
          </Modal.ModalContent>
          <Modal.ModalCloser />
        </Modal.ModalWindow>
      </Modal>
    </>
  )
}

export default ContactFormController
