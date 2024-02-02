import React, { forwardRef } from 'react'
import classNames from 'classnames'

import './index.scss'
import FieldLabel from '../FieldLabel'
import FieldMessage from '../FieldMessage'

interface FieldTextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  name: string
  id: string
  label?: string
  hideLabel?: boolean
  msg?: string
  className?: string
  error: boolean
  valid?: boolean
  rows?: number
  cols?: number
}

const FieldTextArea = forwardRef(function FieldTextArea(
  {
    id,
    name,
    type = 'text',
    msg,
    label,
    hideLabel = false,
    error,
    valid,
    maxLength = 50,
    ...props
  }: FieldTextAreaProps,
  ref: React.Ref<HTMLTextAreaElement>
) {
  const generatedId = `control-textarea-${id}`

  return (
    <div className="control-textarea">
      {label && (
        <FieldLabel id={generatedId} hideLabel={hideLabel}>
          {label}
        </FieldLabel>
      )}

      <textarea
        ref={ref}
        id={generatedId}
        name={name}
        className={classNames({
          textarea: true,
          'textarea--is-invalid': error,
          'textarea--is-valid': valid,
        })}
        {...props}
      />

      {msg && <FieldMessage error={error}>{msg}</FieldMessage>}
    </div>
  )
})

export default FieldTextArea
