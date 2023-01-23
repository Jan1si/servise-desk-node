import React from 'react'
import logo from '../../assets/logo.svg';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
        {/* Header */}
        <div className="container">
          <div className={styles.headerBlock}>
            <div className={styles.logo}>
              <img src={logo} alt="Логотип" />
            </div>
          </div>
        </div>
      </header>
  )
}
