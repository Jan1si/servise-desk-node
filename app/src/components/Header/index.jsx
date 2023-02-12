import React, {useContext} from 'react'
import { UserContext } from '../../App';
import logo from '../../assets/logo.svg';
import styles from './Header.module.scss';

export const Header = () => {

  const { userData } = useContext(UserContext);

  return (
    <header className={styles.header}>
        {/* Header */}
        <div className="container">
          <div className={styles.headerBlock}>
            <div className={styles.logo}>
              <img src={logo} alt="Логотип" />
            </div>
            <button className={styles.logout}>
              {userData.name}
            </button>
          </div>
        </div>
      </header>
  )
}
