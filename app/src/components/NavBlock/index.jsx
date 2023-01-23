import React from 'react';
import styles from "./NavBlock.module.scss";

export const NavBlock = () => {
  return (
    <div className={styles.navBlock}>
      <nav className={styles.navMenu}>
      
        <ul className={styles.navList}>
          <li className={styles.navItem}><p>Составить заявку</p></li>
          <li className={styles.navItem}><p>Журнал заявок</p></li>
        </ul>

        <ul className={styles.subNavList}>
          <p className={styles.titleSubList}>Справочники</p>

          <li className={styles.subNavItem}><p>Пользователи</p></li>
          <li className={styles.subNavItem}><p>Отделения</p></li>
          <li className={styles.subNavItem}><p>Категории</p></li>
          <li className={styles.subNavItem}> <p>Роли</p></li>
        </ul>

      </nav>
    </div>
  )
}
