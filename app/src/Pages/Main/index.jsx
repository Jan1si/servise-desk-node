import React from 'react'
import { NavBlock } from '../../components/NavBlock';
import { TaskForm } from '../../components/TaskForm';
import { TasksList } from '../../components/TasksList';

export const Main = () => {

  return (
    <>
      <TaskForm />  
      <TasksList />
    </>
  )
}
