import React from 'react';
import axios from '../../axios.js';

import { TableRow } from '../TableRow'

import styles from './Table.module.scss';

export const Table = ({fetchData, setFetchData, showCollumns, headerColumns, nameTable}) => {
 
  console.log(fetchData)

  const onRemove = async (id) => {
    try {
        const { data } = await axios.delete(`/${nameTable}/${id}`);
        console.log(data);
        setFetchData((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
        alert("Неудалось удалить запись!");
    }
  }


  return (
    <table className={styles.table}>
        <thead className={styles.tHead}>
            <tr className={styles.rowHead}>
                {headerColumns.map((item, key) => 
                    <th key={key} className={styles.colHead}>
                        <div className={styles.colContent}>{item}</div>
                    </th>
                )}

            </tr>
        </thead>
        <tbody className={styles.tBody}>
            {fetchData.map((item, key)=> 
                <TableRow  key={key} 
                    childKey={key} 
                    value={item}
                    onRemove={onRemove}
                    showColumns={showCollumns}
                />
            )}
            
        </tbody>
    </table>
  )
}
