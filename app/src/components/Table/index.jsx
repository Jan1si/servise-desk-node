import React from 'react'
import { TableRow } from '../TableRow'
import styles from './Table.module.scss';

export const Table = ({fetchData, showCollumns, headerColumns}) => {
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
                    showColumns={showCollumns}
                />
            )}
            
        </tbody>
    </table>
  )
}
