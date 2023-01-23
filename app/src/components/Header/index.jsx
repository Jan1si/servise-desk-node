import React from 'react'
import logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <header className='header'>
        {/* Header */}
        <div className="container">
          <div className="headerBlock">
            <div className="logo">
              <img src={logo} alt="Логотип" />
            </div>
          </div>
        </div>
      </header>
  )
}
