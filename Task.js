import React from 'react'


export const Task = (props) => {
  const { task } = props;
  return <div>
    <div>description: { task.description }</div>
  </div>
}