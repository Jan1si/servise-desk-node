import React, {useState, useEffect} from 'react'
import axios from '../../axios.js';

import { Pagination } from '../../components/Pagination'
import { TaskCard } from '../../components/TaskCard'

import  './Tasks.scss'

export const Tasks = () => {

  const [dataTask, setDataTask] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await axios.get('/tasks');
        const obj = JSON.parse(JSON.stringify(data.tasks));
        setDataTask(() => obj);
      }
      fetchData(); 
    } catch (error) {
      alert(`Неудалось получить данные ${error}`);
    }
  },[])

  console.log(dataTask);

  return (
   <div className="listBlock">
      <div className="title">
        <h2>Журнал заявок</h2>
      </div>
      <ul className="tasklist">
        {dataTask.map((item) => 
          <TaskCard  {...item} />
        )}
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
