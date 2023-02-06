import React, { useEffect, useState }  from 'react'
import axios from '../../axios.js'
import { Table } from '../../components/Table';

import styles from '../../TableBlock.module.scss';
export const UserTable = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        try {
          const fetchData = async () => {
            const { data } = await axios.get('/users');
            const obj = JSON.parse(JSON.stringify(data.users));
            setUserData(() => obj);
          }
          fetchData();
        } catch (error) {
            alert(`Неудалось получить данные! ${error}`)
        }
    }, []);
    
  return (
    <div className={styles.tableBlock}>
      <div className={styles.titleTable}>
        <h2>Пользователи</h2>
      </div>
      <div className={styles.tableWrapp}>
        
          <Table
              nameTable={'users'}
              fetchData={userData}
              setFetchData={setUserData}
              headerColumns={["id", "Имя", "Отделение", "Роль", "Email"]}
              showCollumns={["_id", "name",  "department",  "role", "email"]} />
      </div>
    </div>
  )
}
