import React from 'react'
import styles from './index.module.scss'

interface FieldInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const FieldInputTrap = (props: FieldInputProps) => (
  <input className={styles.confirmEmail} type="text" {...props} />
)

export default FieldInputTrap
