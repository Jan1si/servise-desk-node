import React from 'react';
import styles from "./NavBlock.module.scss";
import { Link } from 'react-router-dom';

export const NavBlock = () => {
  return (
    <div className={styles.navBlock}>
      <nav className={styles.navMenu}>
      
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/">Составить заявку</Link></li>
          <li className={styles.navItem}><Link to="/tasks">Журнал заявок</Link></li>
        </ul>

        <ul className={styles.subNavList}>
          <p className={styles.titleSubList}>Справочники</p>

          <li className={styles.subNavItem}><Link to="/tables/users">Пользователи</Link></li>
          <li className={styles.subNavItem}><Link to="/tables/departments">Отделения</Link></li>
          <li className={styles.subNavItem}><Link to="/tables/categories">Категории</Link></li>
          <li className={styles.subNavItem}><Link to="/tables/roles">Роли</Link></li>

        </ul>

      </nav>
    </div>
  )
}
