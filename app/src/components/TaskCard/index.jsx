import React from 'react';
import styles from './TaskCard.module.scss';


export const TaskCard = () => {
  return (
    <div className={styles.taskItem}>
      <div className={styles.headerItem}>
        <div className={styles.titleItem}>
          <h2>Заголовок</h2>
        </div>
        <div className={styles.priorityItem}>
          <span>Приоритет</span>
        </div>
      </div>
      <div className={styles.infoTask}>
        <div className={styles.categoryTask}><p>Категория заявки</p></div>
        <div className={styles.userTask}><p>Фамилия Имя Отчество</p></div>
      </div>
      <div className={styles.textTask}>
        <p>
          Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается 
        </p>
      </div>
      <button className={styles.btnSend}>Принять</button>
    </div>
  )
}
