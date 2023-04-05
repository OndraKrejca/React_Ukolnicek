import React from 'react'
import { FormCheck, FormInput, FormSelect } from './index'
import { globalContext } from '../context/context'

const Formpanel = () => {
  const { handleSubmit } = globalContext()
  return (
    <section className='section_form'>
      <form className='form'>
        <FormInput />
        <div className='form__box'>
          <FormSelect />
          <FormCheck />

          <button type='submit' className='btn' onClick={handleSubmit}>
            Přidat
          </button>
        </div>
      </form>
    </section>
  )
}

export default Formpanel
