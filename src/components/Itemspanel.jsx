import React from 'react'
import { globalContext } from '../context/context'
import { Item } from './index'

const Itemspanel = () => {
  const { totaltask } = globalContext()

  return (
    <section className='itemsPanel__container'>
      {totaltask.map((item) => {
        return <Item key={item.id} {...item} />
      })}
    </section>
  )
}

export default Itemspanel
