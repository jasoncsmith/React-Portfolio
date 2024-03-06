import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '.'

describe('Contact Form tests', () => {
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
    render(<ContactForm />)
    const el = document.getElementById('field-text-firstName')
    expect(el).toHaveFocus()
  })

  it('should render "Required" tag when form is submitted and incomplete and remove when complete', async () => {
    const { container } = render(<ContactForm />)

    const submitBtn = screen.getByRole('button', { name: /transmit/i })

    await act(async () => {
      userEvent.type(screen.getByLabelText(/^First Name/i), 'Captain')
      userEvent.type(screen.getByLabelText(/^Last Name/i), 'Bob')
      userEvent.type(screen.getByLabelText(/^Email/i), 'captain@bob.com')
    })

    await act(async () => userEvent.click(submitBtn))
    expect(screen.queryByText(/required/i)).toBeInTheDocument()

    await act(async () => userEvent.type(screen.getByPlaceholderText(/^Greetings/i), 'Captain Ahoy'))
    expect(screen.queryByText(/required/i)).not.toBeInTheDocument()
  })
})
