import React from 'react'
import './styles.scss'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  type: string
}

const InputSearchStore: React.FC<IInputProps> = (props) => {
  return <input {...props} className='input-search-store col-md-12 ' />
}

export default InputSearchStore
