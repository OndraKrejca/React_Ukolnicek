import React from 'react'
import { globalContext } from '../context/context'

const FormCheck = () => {
  const {
    handleChange,
    task: { asap },
  } = globalContext()

  return (
    <div className='form__check'>
      <label htmlFor='check' style={{ color: ' #ff0000', fontWeight: 600 }}>
        Důležité
      </label>
      <input
        id='check'
        type='checkbox'
        name='asap'
        checked={asap}
        onChange={handleChange}
      ></input>
    </div>
  )
}

export default FormCheck
