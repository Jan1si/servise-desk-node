import React from 'react'
import styles from "./Pagination.module.scss";

export const Pagination = ({value}) => {
  return (
    <li className={styles.bullet}>
      <p>{value}</p>
    </li>
  )
}
