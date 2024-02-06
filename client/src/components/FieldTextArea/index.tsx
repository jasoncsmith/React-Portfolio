import React, { forwardRef } from 'react'
import classNames from 'classnames'

import FieldLabel from '../FieldLabel'
import FieldMessage from '../FieldMessage'
import styles from './index.module.scss'

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
    <div className={styles['control-textarea']}>
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
          [styles.textarea]: true,
          [styles['textarea--is-invalid']]: error,
          [styles['textarea--is-valid']]: valid,
        })}
        {...props}
      />

      {msg && <FieldMessage error={error}>{msg}</FieldMessage>}
    </div>
  )
})

export default FieldTextArea
