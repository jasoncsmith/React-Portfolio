import React from 'react'
import classNames from 'classnames'
import './index.scss'

interface FieldLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  hideLabel?: boolean
  className?: string
  error?: boolean
  children: React.ReactNode
}

function FieldLabel({ id, error = false, hideLabel = true, children }: FieldLabelProps) {
  return (
    <label
      className={classNames({
        label: true,
        'label--is-invalid': error,
        'label--is-hidden': hideLabel,
      })}
      htmlFor={id}
    >
      {children}
    </label>
  )
}

export default FieldLabel
