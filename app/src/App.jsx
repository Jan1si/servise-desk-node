import React from 'react'
import logo from './assets/logo.svg'
import logoWhite from './assets/logo-white.svg'
import './index.scss'

export const App = () => {
  return (
    <div className="app">
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

      <div className="main">
        {/* Body */}
        <div className="container">
          <div className="mainBlock">

            {/* Nav */}
            <div className="navBlock">
              <nav className="navMenu">
              
                <ul className="navList">
                  <li className="navItem"><p>Составить заявку</p></li>
                  <li className="navItem"><p>Журнал заявок</p></li>
                </ul>

                <ul className="subNavList">
                  <p className="titleSubList">Справочники</p>

                  <li className="subNavItem"><p>Пользователи</p></li>
                  <li className="subNavItem"><p>Отделения</p></li>
                  <li className="subNavItem"><p>Категории</p></li>
                  <li className="subNavItem"> <p>Роли</p></li>
                </ul>

              </nav>
            </div>
            {/* Nav */}


            <div className="formBlock">
              <div className="title"></div>
                <form action="">
                  <div className="inputGroup">
                    <input name='title' type="text" placeholder='Загололвок заявки...'/>
                  </div>
                  <div className="inputGroup groupRow">

                    <div className="selectInput">
                      <input name='category' 
                      type="text" 
                      disabled placeholder='Выберите категорию'/>
                    </div>
                    <div className="selectInput">
                      <input name='priority' 
                      type="text" 
                      disabled placeholder='Выберите приоритет'/>
                    </div>

                  </div>

                  <div className="inputGroup">
                    <textarea name="desc" placeholder='Опишите вашу проблему...'>
                    </textarea>
                  </div>
                </form>
              </div>

          </div>
        </div>
      </div>

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
    </div>
  )
}

