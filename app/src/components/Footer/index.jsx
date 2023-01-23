import React from 'react';
import logoWhite from '../../assets/logo-white.svg';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        {/* Footer */}
        <div className="container">
          <div className={styles.footerBlock}>
            <div className={styles.logo}>
              <img src={logoWhite} alt="Логотип" />
            </div>
          </div>
        </div>
      </footer>
  )
}
