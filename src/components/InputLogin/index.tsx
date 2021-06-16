import React from 'react'
import './styles.scss'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  type: string
  className?: string
}

const InputLogin: React.FC<IInputProps> = (props) => {
  return <input {...props} />
}

export default InputLogin
