import React from 'react';
import styles from './TaskCard.module.scss';


export const TaskCard = ({ title, category, priority, creater, desk }) => {
  return (
    <div className={styles.taskItem}>
      <div className={styles.headerItem}>
        <div className={styles.titleItem}>
          <h2>{title}</h2>
        </div>
        <div className={styles.priorityItem}>
          <span>{priority}</span>
        </div>
      </div>
      <div className={styles.infoTask}>
        <div className={styles.categoryTask}><p>{category}</p></div>
        <div className={styles.userTask}><p>{creater.name}</p></div>
      </div>
      <div className={styles.textTask}>
        <p>{desk}</p>
      </div>
      <button className={styles.btnSend}>Принять</button>
    </div>
  )
}
