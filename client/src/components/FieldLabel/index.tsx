import React from 'react'
import classNames from 'classnames'
import styles from './index.module.scss'

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
        [styles.label]: true,
        [styles['label--is-invalid']]: error,
        [styles['label--is-hidden']]: hideLabel,
      })}
      htmlFor={id}
    >
      {children}
    </label>
  )
}

export default FieldLabel
