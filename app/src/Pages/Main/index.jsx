import React from 'react'
import { NavBlock } from '../../components/NavBlock';
import { TaskForm } from '../../components/TaskForm';
import { TasksBar } from '../../components/TasksBar';

export const Main = () => {

  return (
    <>
      <TaskForm />  
      <TasksBar />
    </>
  )
}
