import React from 'react'
import classNames from 'classnames'

import './index.scss'

interface FieldMessageProps {
  error: boolean
  children: React.ReactNode
}

const FieldMessage = ({ error, children }: FieldMessageProps) =>
  error ? (
    <span
      className={classNames({
        'validation-message': true,
        'validation-message--is-invalid': error,
        'validation-message--is-valid': false,
      })}
    >
      {children}
    </span>
  ) : null

export default FieldMessage
