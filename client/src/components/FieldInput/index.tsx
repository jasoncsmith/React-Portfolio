import React, { ForwardRefRenderFunction, RefAttributes, forwardRef } from 'react'
import classNames from 'classnames'
import './index.scss'

interface FieldInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  type?: React.HTMLInputTypeAttribute // should type be required
  className?: string
  error: boolean
  valid?: boolean
  variant?: 'dark' | 'light'
}

const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(function FieldInput(
  { id, name, type = 'text', error, valid, maxLength = 50, ...props }: FieldInputProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <input
      id={id}
      ref={ref}
      name={name}
      type={type}
      className={classNames({
        'field-input': true,
        'field-input--is-invalid': error,
        'field-input--is-valid': valid,
      })}
      {...props}
    />
  )
})

export default FieldInput
