import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactFormController from '.'

describe('Contact Form Controller tests', () => {
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

  it('should render loader and disable submit button on form submit', async () => {
    const component = render(<ContactFormController />)

    const submitBtn = component.getByTestId('contact-submit-button')

    await act(async () => {
      userEvent.type(component.getByLabelText(/^First Name/i), 'Captain')
      userEvent.type(component.getByLabelText(/^Last Name/i), 'Bob')
      userEvent.type(component.getByLabelText(/^Email/i), 'captain@bob.com')
      userEvent.type(component.getByPlaceholderText(/^Greetings/i), 'Captain Ahoy')
      userEvent.click(submitBtn)
    })
    expect(component.getByRole('alert')).toBeInTheDocument()
    expect(submitBtn).toBeDisabled()
  })

  it('should have the correct amount of required elements if blank form is submitted', async () => {
    render(<ContactFormController />)

    const submitBtn = screen.getByTestId('contact-submit-button')

    await act(async () => {
      userEvent.click(submitBtn)
    })
    expect(screen.queryAllByText(/required/i)).toHaveLength(4)
  })
})
