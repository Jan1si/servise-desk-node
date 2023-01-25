import React from 'react'
import empty from '../../assets/empty.svg';

export const TasksBar = () => {
  return (
    <div className="blockTasks">
      <div className="title">
        <h2>Все ваши заявки</h2>
      </div>
      <div className="tasksList">
        <div className="emptyBlock">
          <img src={empty} alt="Пусто" />
          <p className="emptyText">Список ваших заявок пуст!</p>
        </div>
      </div>
    </div>
  )
}
