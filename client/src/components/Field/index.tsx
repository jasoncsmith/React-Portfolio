import React, { forwardRef } from 'react'

import FieldLabel from '../FieldLabel'
import FieldInput from '../FieldInput'
import FieldMessage from '../FieldMessage'

import styles from './index.module.scss'

// TODO HOW TO PASS IN INDVIDUAL PROPS
interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  ref?: React.Ref<HTMLInputElement>
  type: React.HTMLInputTypeAttribute
  name: string
  error: boolean
  msg?: string
  label?: string
  hideLabel?: boolean // do we need this
  className?: string
}

const Field = forwardRef(function Field(
  { id, name, error, msg, label, hideLabel = true, type = 'text', ...props }: FieldProps,
  ref: React.Ref<HTMLInputElement>
) {
  // TODO weigh variant
  // how to do input variant dark, light vs error, valid variant. not sure state should be a variant?
  const generatedID = `field-${type}-${id}`

  return (
    <div className={styles.field}>
      {label && (
        <FieldLabel id={generatedID} error={error} hideLabel={hideLabel}>
          {label}
        </FieldLabel>
      )}
      <FieldInput ref={ref} id={generatedID} name={name} type={type} error={error} {...props} />
      {msg && <FieldMessage error={error}>{msg}</FieldMessage>}
    </div>
  )
})

export default Field
