import React from 'react'
import { TaskForm } from '../../components/TaskForm';
import { TasksBar } from '../../components/TasksBar';
import styles from './Main.module.scss';

export const Main = () => {

  return (
    <div className={styles.yourTaskBlock}>
      <TaskForm />  
      <TasksBar />
    </div>
  )
}
