import React from 'react'
import empty from '../../assets/empty.svg';
import styles from './TaskBar.module.scss';

export const TasksBar = () => {
  return (
    <div className={styles.blockTasks}>
      <div className={styles.title}>
        <h2>Все ваши заявки</h2>
      </div>
      <div className={styles.tasksList}>
        <div className={styles.emptyBlock}>
          <img src={empty} alt="Пусто" />
          <p className={styles.emptyText}>Список ваших заявок пуст!</p>
        </div>
      </div>
    </div>
  )
}
