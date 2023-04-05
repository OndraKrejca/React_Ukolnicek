import React, { useEffect, useRef } from 'react'
import { globalContext } from '../context/context'

const FormSelect = () => {
  const { handleChange, totaltask, task, edit } = globalContext()

  let element = useRef()

  useEffect(() => {
    if (!edit) {
      element.current.value = 'all'
    } else {
      element.current.value = task.category
    }
  }, [totaltask, edit])

  return (
    <div>
      <select
        className='form__select'
        ref={element}
        name='category'
        onChange={handleChange}
      >
        <option value='all'>Vyber činnost...</option>
        <option value='uklid'>Úklid</option>
        <option value='prace'>Práce</option>
        <option value='studium'>Učit se</option>
        <option value='sport'>Sport</option>
      </select>
    </div>
  )
}

export default FormSelect
