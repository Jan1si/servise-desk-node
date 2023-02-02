import React, { useEffect, useState } from 'react'
import axios from '../../axios.js';

import { Table } from '../../components/Table/index.jsx';

import styles from '../../TableBlock.module.scss';

export const CategTable = () => {

  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await axios.get('/categories');
        const obj = JSON.parse(JSON.stringify(data.categories));
        console.log(obj);
        setDataCategory(() => obj);
      };
      fetchData();
    } catch (error) {
      alert(`Неудалось получить данные! ${error}`);
    }
    
  }, [])

  return (
    <div className={styles.tableBlock}>
      <div className={styles.titleTable}>
          <h2>Категории</h2>
      </div>
      <div className={styles.tableWrapp}>
        
          <Table
              fetchData={dataCategory}
              headerColumns={["id", "Название"]}
              showCollumns={["_id", "title"]} />
      </div>
    </div>
  )
}
