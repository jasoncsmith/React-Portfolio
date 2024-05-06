import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ContactFormModel } from '../ContactFormController'

import ContactForm from '.'

describe('Contact Form tests', () => {
  const initialValues: ContactFormModel = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    comments: '',
  }

  it('should focus first name field when rendered', async () => {
    const useFormik = jest.fn().mockImplementation(props => ({
      initialValues: props.initialValues || {},
      onSubmit: props.onSubmit || jest.fn(),
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      values: props.values || {},
      errors: props.errors || {},
      touched: props.touched || {},
    }))
    render(<ContactForm isWaiting={false} handler={useFormik({ initialValues })} />)
    const el = document.getElementById('field-text-firstName')
    expect(el).toHaveFocus()
  })
})
