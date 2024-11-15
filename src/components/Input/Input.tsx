import { InputHTMLAttributes } from 'react'
import type { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props<TFieldValues extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  classNameEye?: string
  register?: UseFormRegister<TFieldValues>
  rules?: RegisterOptions
}

export default function Input() {
  return <div>Input</div>
}
