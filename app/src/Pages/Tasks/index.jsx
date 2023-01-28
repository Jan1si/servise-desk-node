import React from 'react'
import { Pagination } from '../../components/Pagination'
import { TaskCard } from '../../components/TaskCard'
import  './Tasks.scss'

export const Tasks = () => {
  return (
   <div className="listBlock">
      <div className="title">
        <h2>Журнал заявок</h2>
      </div>
      <ul className="tasklist">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </ul>
      <div className="paginationBlock">
        <ul className="pagList">
          <Pagination value={1} />
          <Pagination value={2} />
          <Pagination value={3} />
          <Pagination value={4} />
          <Pagination value={5} />
        </ul>
      </div>
   </div>
  )
}
