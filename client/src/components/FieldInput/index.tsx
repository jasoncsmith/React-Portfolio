import React, { forwardRef } from 'react'
import classNames from 'classnames'

import styles from './index.module.scss'

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
        [styles['field-input']]: true,
        [styles['field-input--is-invalid']]: error,
        [styles['field-input--is-valid']]: valid,
      })}
      {...props}
    />
  )
})

export default FieldInput
