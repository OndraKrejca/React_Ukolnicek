import { toast } from 'react-toastify'

const reducer = (state, action) => {
  if (action.type === 'HANDLECHANGE') {
    const { name, value } = action.payload

    return {
      ...state,
      task: { ...state.task, [name]: value },
    }
  }

  if (action.type === 'HANDLESUBMIT') {
    const { name, category } = state.task

    if (!name || !category) {
      toast.error('Zadejte úkol')
    } else if ((name && category, state.edit)) {
      toast.success('Úkol upraven')
      const newItem = state.totaltask.map((item, index) => {
        if (item.id === state.editID) {
          item = {
            ...item,
            name: state.task.name,
            asap: state.task.asap,
            category: state.task.category,
          }
        }
        return item
      })

      return {
        ...state,
        edit: false,
        editID: null,
        totaltask: newItem,
        task: { name: '', category: '', asap: false },
      }
    } else {
      const newTask = { id: new Date().getTime().toString(), ...state.task }
      toast.success('Úkol přidán')
      return {
        ...state,
        totaltask: [newTask, ...state.totaltask],
        task: { name: '', category: '', asap: false },
      }
    }
  }

  if (action.type === 'DELETEITEM') {
    toast.error('Úkol smazán')
    const id = action.payload

    const deleteItem = state.totaltask.filter((item) => {
      return item.id !== id
    })

    return {
      ...state,
      totaltask: deleteItem,
    }
  }

  if (action.type === 'EDITITEM') {
    const id = action.payload

    const editItem = state.totaltask.find((item) => {
      return item.id === id
    })

    return {
      ...state,
      edit: true,
      editID: id,
      task: {
        name: editItem.name,
        category: editItem.category,
        asap: editItem.asap,
      },
    }
  }

  if (action.type === 'LOCALSTORE') {
  }

  return { ...state }
}

export default reducer
