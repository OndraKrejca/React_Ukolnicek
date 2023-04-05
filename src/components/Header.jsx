import React from 'react'
import obr from '../assets/time.svg'
import { TaskComponents } from './index.jsx'
import { globalContext } from '../context/context'

const Header = () => {
  const { totaltask } = globalContext()

  const allItems = totaltask.length

  const allImportatnt = totaltask.filter((item) => {
    return item.asap === true
  }).length

  return (
    <header>
      <img src={obr} alt='time management' className='header__img' />

      <div className='header__textbox'>
        <h2>Úkolníček</h2>
        <p>"Co můžeš udělat dnes, neodkládej na zítřek"</p>

        <div className='header__tasks'>
          <TaskComponents
            text={{
              divName: 'all',
              headline: 'Celkem',
              num: allItems,
            }}
          />

          {/* <TaskComponents
            text={{
              divName: 'done',
              headline: 'hotovo',
              num: 0,
            }}
          /> */}

          <TaskComponents
            text={{
              divName: 'unfinished',
              headline: 'Důležité',
              num: allImportatnt,
            }}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
