import React from 'react'
import { useState } from 'react';
import styles from "./TableRow.module.scss";

export const TableRow = ({childKey, value}) => {

  const [isActive, setIsActive] = useState(false);
  
  const filter = ["_id", "password", "createdAt", "updatedAt", "__v"];
  const valueFilter = Object.keys(value).filter((item) => {
    // console.log(item);
    for (const key of filter) {
      console.log(item === key);
      if (item === key) {
        delete value.key;
        return false;
      } else {
        return true
      }
     
    }
  })

  console.log(valueFilter);

  const handleClick = (e) => {
    if (e.id === "remove" || e.id === 'edit') return;
    setIsActive((prev) => !prev);
    
  }

  return (
    <tr key={childKey} className={styles.rowBody} onClick={(e) => handleClick(e.target)}>
      <td className={styles.colBody}><div className={styles.colContent}>Ячейка</div></td>
      <td className={styles.colBody}><div className={styles.colContent}>Ячейка</div></td>
      <td className={styles.colBody}><div className={styles.colContent}>Ячейка</div></td>
      <td className={styles.colBody}><div className={styles.colContent}>Ячейка</div></td>
      <td className={styles.colBody}><div className={styles.colContent}>Ячейка</div></td>
      <td className={isActive ? styles.rowBar : styles.hideRowBar}>
        <div id='edit' className={styles.btnEdit}>Редактировать</div>
        <div id='remove' className={styles.btnRemove}>Удалить</div>
      </td>
    </tr>
    )
}
