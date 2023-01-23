import React from 'react';
import logoWhite from '../../assets/logo-white.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
        {/* Footer */}
        <div className="container">
          <div className="footerBlock">
            <div className="logo">
              <img src={logoWhite} alt="Логотип" />
            </div>
          </div>
        </div>
      </footer>
  )
}
