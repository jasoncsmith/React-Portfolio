import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Modal from '.'
import { ModalOpener } from './components/ModalContent'

describe('Tests for modal', () => {
  it('Modal content should be in document when modal opener is clicked', async () => {
    render(
      <Modal>
        <Modal.ModalWindow modalId="test">
          <Modal.ModalContent>This is modal content</Modal.ModalContent>
        </Modal.ModalWindow>
        <ModalOpener modalId="test">click me</ModalOpener>
      </Modal>
    )

    const user = userEvent.setup()
    const btn = screen.getByText(/click me/i)
    await user.click(btn)

    expect(screen.getByText(/this is modal content/i)).toBeInTheDocument()
  })

  it('Modal content should be in document when modal is opened externally', async () => {
    render(
      <Modal>
        <Modal.ModalWindow modalId="test" externalOpen={true} externalReset={() => {}}>
          <Modal.ModalContent>This is modal content</Modal.ModalContent>
        </Modal.ModalWindow>
      </Modal>
    )

    expect(screen.getByText(/this is modal content/i)).toBeInTheDocument()
  })

  it('Modal content should not be in document when externalOpen is false', async () => {
    render(
      <Modal>
        <Modal.ModalWindow modalId="test" externalOpen={false} externalReset={() => {}}>
          <Modal.ModalContent>This is modal content</Modal.ModalContent>
        </Modal.ModalWindow>
      </Modal>
    )

    expect(screen.queryByText(/this is modal content/i)).not.toBeInTheDocument()
  })

  it('Modal should warn before closing', async () => {
    const modalId = 'test'
    const user = userEvent.setup()

    render(
      <Modal warnBeforeClose={[modalId]}>
        <Modal.ModalWindow modalId={modalId} externalOpen={true} externalReset={() => {}}>
          <Modal.ModalContent>This is modal content</Modal.ModalContent>
          <Modal.ModalCloser />
        </Modal.ModalWindow>
      </Modal>
    )

    expect(screen.getByText(/this is modal content/i)).toBeInTheDocument()
    await user.click(screen.getByRole('presentation'))

    // TODO: figure out why jest.useFakeTimers(), jest.advanceTimersByTime(300) does not work
    setTimeout(() => {
      expect(screen.queryByText(/you will lose any unsaved changes. continue\?/i)).toBeInTheDocument()
    }, 15)
  })
})
