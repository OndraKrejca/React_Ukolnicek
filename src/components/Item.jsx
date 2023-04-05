import React from 'react'
import { BiRun } from 'react-icons/bi'
import { globalContext } from '../context/context.jsx'
import {
  MdNotificationImportant,
  MdDelete,
  MdEdit,
  MdOutlineCleaningServices,
  MdWorkOutline,
  MdOutlineSchool,
} from 'react-icons/md'

const Item = ({ id, name, category, asap }) => {
  const { deleteItem, editItem } = globalContext()

  let itemCategory = {
    colorScheme: 'item__clean',
    icon: <MdOutlineCleaningServices />,
  }

  if (category === 'sport') {
    itemCategory = {
      colorScheme: 'item__sport',
      icon: <BiRun />,
    }
  } else if (category === 'prace') {
    itemCategory = {
      colorScheme: 'item__prace',
      icon: <MdWorkOutline />,
    }
  } else if (category === 'studium') {
    itemCategory = {
      colorScheme: 'item__studium',
      icon: <MdOutlineSchool />,
    }
  }

  return (
    <article className={`item__container ${itemCategory.colorScheme}`}>
      <div className={`item__box--category `}>
        <span className='item__category'>{itemCategory.icon}</span>
      </div>

      <div className='item__box--name'>
        <p className='item__name'>{name}</p>
      </div>

      <div className='item__box--buttons'>
        <span className='item__important'>
          {asap && <MdNotificationImportant />}
        </span>

        <div className='item__buttons'>
          <button
            className='item__buttons--edit'
            type='button'
            onClick={() => editItem(id)}
          >
            <MdEdit />
          </button>
          <button
            className='item__buttons--delete'
            type='button'
            onClick={() => deleteItem(id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </article>
  )
}

export default Item
