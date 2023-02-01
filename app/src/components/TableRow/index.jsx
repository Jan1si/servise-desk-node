import React from 'react'
import { useState } from 'react';
import styles from "./TableRow.module.scss";

export const TableRow = ({childKey, value, showColumns}) => {

  const [isActive, setIsActive] = useState(false);
  
  const handleClick = (e) => {
    if (e.id === "remove" || e.id === 'edit') return;
    setIsActive((prev) => !prev);
    
  }

  return (
    <tr key={childKey} className={styles.rowBody} onClick={(e) => handleClick(e.target)}>
      {showColumns.map((item, key) => 
        <td key={key} className={styles.colBody}><div className={styles.colContent}>{value[item]}</div></td>
       )}
      <td className={isActive ? styles.rowBar : styles.hideRowBar}>
        <div id='edit' className={styles.btnEdit}>Редактировать</div>
        <div id='remove' className={styles.btnRemove}>Удалить</div>
      </td>
    </tr>
    )
}
