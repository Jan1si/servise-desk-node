import React, { useEffect, useState } from 'react'
import axios from '../../axios.js';

import { Table } from '../../components/Table/index.jsx';

import styles from '../../TableBlock.module.scss';

export const DepartTable = () => {

  const [dataDepart, setDataDepart] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await axios.get('/departmens');
        const obj = JSON.parse(JSON.stringify(data.departments));
        setDataDepart(() => obj);
      };
      fetchData();
    } catch (error) {
      alert(`Неудалось получить данные! ${error}`);
    }
    
  }, [])

  return (
    <div className={styles.tableBlock}>
      <div className={styles.titleTable}>
        <h2>Отделения</h2>
      </div>
      <div className={styles.tableWrapp}>
          <Table
              fetchData={dataDepart}
              headerColumns={["id", "Название"]}
              showCollumns={["_id", "title"]} />
      </div>
    </div>
  )
}
