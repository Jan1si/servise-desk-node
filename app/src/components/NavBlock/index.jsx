import React from 'react';
import styles from "./NavBlock.module.scss";
import { Link } from 'react-router-dom';
import { ReactComponent as WriteTasksIcon} from "../../assets/write-task.svg" 
import { ReactComponent as UserIcon } from "../../assets/user.svg";
import { ReactComponent as RolesIcon } from "../../assets/roles.svg";
import { ReactComponent as DepartmentIcon } from "../../assets/department.svg";
import { ReactComponent as CategoryIcon } from "../../assets/category.svg";
import { ReactComponent as TaskListIcon } from "../../assets/task-list.svg";


export const NavBlock = () => {
  return (
    <div className={styles.navBlock}>
      <nav className={styles.navMenu}>
      
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/">
              <WriteTasksIcon  className={styles.navIcon} width="25px" height="25px"/>
              Составить заявку
            </Link></li>
          <li className={styles.navItem}>
              <Link to="/tasks">
                <TaskListIcon className={styles.navIcon} width="25px" height="25px"/>
                Журнал заявок 
              </Link>
            </li>
        </ul>

        <ul className={styles.subNavList}>
          <p className={styles.titleSubList}>Справочники</p>

          <li className={styles.subNavItem}>
            <Link to="/tables/users">
              <UserIcon className={styles.navIcon} width="20px" height="20px"/>
              Пользователи
              </Link>
          </li>
          <li className={styles.subNavItem}>
            <Link to="/tables/departments">
              <DepartmentIcon className={styles.navIcon} width="20px" height="20px"/>
              Отделения
              </Link>
          </li>
          <li className={styles.subNavItem}>
            <Link to="/tables/categories">
              <CategoryIcon className={styles.navIcon} width="20px" height="20px"/>
              Категории
              </Link>
          </li>
          <li className={styles.subNavItem}>
            <Link to="/tables/roles">
              <RolesIcon className={styles.navIcon} width="20px" height="20px"/>
              Роли
              </Link>
          </li>

        </ul>

      </nav>
    </div>
  )
}
