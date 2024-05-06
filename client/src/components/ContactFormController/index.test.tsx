import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ContactFormController from '.'

describe('Contact Form Controller tests', () => {
  it('should render loader and disable submit button on form submit', async () => {
    const user = userEvent.setup()
    const component = render(<ContactFormController />)
    const submitBtn = component.getByTestId('contact-submit-button')

    await user.type(component.getByLabelText(/^First Name/i), 'Captain')
    await user.type(component.getByLabelText(/^Last Name/i), 'Bob')
    await user.type(component.getByLabelText(/^Email/i), 'captain@bob.com')
    await user.type(component.getByPlaceholderText(/^Greetings/i), 'Captain Ahoy')
    await user.click(submitBtn)

    expect(component.getByRole('alert')).toBeInTheDocument()
    expect(submitBtn).toBeDisabled()
  })

  it('should have the correct amount of required elements if blank form is submitted', async () => {
    const { getByTestId, queryAllByText } = render(<ContactFormController />)
    const user = userEvent.setup()

    await user.click(getByTestId('contact-submit-button'))

    expect(queryAllByText(/required/i)).toHaveLength(4)
  })
})
