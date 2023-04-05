import React from 'react'

const TaskComponents = ({ text: { divName, headline, num } }) => {
  return (
    <div className={`h_tasks__box ${divName}`}>
      <p className='task__text'>{headline}</p>
      <h3 className='taks__num'>{num}</h3>
    </div>
  )
}

export default TaskComponents
