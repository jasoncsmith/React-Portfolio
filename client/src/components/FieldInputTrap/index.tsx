import React from 'react'
import './index.scss'

interface FieldInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const FieldInputTrap = (props: FieldInputProps) => <input className="confirmEmail" type="text" />

export default FieldInputTrap
