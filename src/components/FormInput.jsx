import React from 'react'
import { globalContext } from '../context/context'

const FormInput = () => {
  const {
    handleChange,
    task: { name },
  } = globalContext()
  return (
    <input
      className='form__input--text'
      type='text'
      value={name}
      name='name'
      onChange={handleChange}
      placeholder='Zadej svůj úkol'
      maxLength='30'
    ></input>
  )
}

export default FormInput
