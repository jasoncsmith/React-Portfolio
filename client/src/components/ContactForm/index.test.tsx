import { render } from '@testing-library/react'
import ContactForm from '.'
import { ContactFormModel } from '../ContactFormController'

describe('Contact Form tests', () => {
  const initialValues: ContactFormModel = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    comments: '',
  }

  beforeEach(() => {
    // TODO: global setUpTest.js IntersectionObserver isn't available in it() scope, why
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

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
