import React, { useEffect, useState } from 'react'
import axios from '../../axios.js';

import { Table } from '../../components/Table/index.jsx';

import styles from '../../TableBlock.module.scss';

export const RoleTable = () => {

  const [dataRole, setDataRole] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await axios.get('/roles');
        const obj = JSON.parse(JSON.stringify(data.roles));
        console.log(obj);
        setDataRole(() => obj);
      };
      fetchData();
    } catch (error) {
      alert(`Неудалось получить данные! ${error}`);
    }
    
  },[])

  return (
    <div className={styles.tableBlock}>
      <div className={styles.titleTable}>
        <h2>Роли</h2>
      </div>
      <div className={styles.tableWrapp}>
        <Table
            fetchData={dataRole}
            headerColumns={["id", "Название"]}
            showCollumns={["_id", "title"]} />
      </div>
    </div>
  )
}
