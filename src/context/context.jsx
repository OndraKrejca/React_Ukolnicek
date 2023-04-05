import React, { useContext, useEffect, useReducer, useState } from 'react'
import reducer from '../reducer/reducer'

const AppContext = React.createContext()

const local = () => {
  const newStorage = localStorage.getItem('task')

  if (!newStorage) {
    return []
  } else {
    return JSON.parse(newStorage)
  }
}

const initialState = {
  totaltask: local(),
  task: { name: '', category: '', asap: false },
  editID: null,
  edit: false,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({ type: 'HANDLESUBMIT' })
  }

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    if (name === 'asap') {
      value = e.target.checked
    }

    dispatch({ type: 'HANDLECHANGE', payload: { name, value } })
  }

  const deleteItem = (id) => {
    dispatch({ type: 'DELETEITEM', payload: id })
  }

  const editItem = (id) => {
    dispatch({ type: 'EDITITEM', payload: id })
  }

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(state.totaltask))
  }, [state.totaltask])

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
        handleSubmit,
        deleteItem,
        editItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const globalContext = () => {
  return useContext(AppContext)
}

export default AppProvider
