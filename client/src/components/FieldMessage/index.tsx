import React from 'react'
import classNames from 'classnames'

import styles from './index.module.scss'

interface FieldMessageProps {
  error: boolean
  children: React.ReactNode
}

const FieldMessage = ({ error, children }: FieldMessageProps) =>
  error ? (
    <span
      className={classNames({
        [styles['validation-message']]: true,
        [styles['validation-message--is-invalid']]: error,
        [styles['validation-message--is-valid']]: false,
      })}
    >
      {children}
    </span>
  ) : null

export default FieldMessage
