import React from 'react';
import logo from './assets/logo.svg';
import logoWhite from './assets/logo-white.svg';
import empty from './assets/empty.svg';
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

            {/* Form */}
            <div className="formBlock">
              <div className="title">
                <h2>Составление заявки</h2>
              </div>
              <form>
                <div className="inputGroup">
                  <input name='title' type="text" placeholder='Заголовок заявки'/>
                </div>
                <div className="inputGroup">
                  <div className="selectInput">
                    <input name='category' type="text" disabled placeholder='Категория проблемы'/>
                  </div>
                  <div className="selectInput">
                    <input name='priority' type="text" disabled placeholder='Приоритет заявки'/>
                  </div>
                </div>
                <div className="inputGroup">
                  <textarea name="dsec" placeholder='Опишите вашу проблему...'></textarea>
                </div>
              </form>
              <button className="sendFormBtn">Отправить</button>
            </div>
            {/* Form */}

            <div className="blockTasks">
              <div className="title">
                <h2>Все вашии заявки</h2>
              </div>
              <div className="tasksList">
                <div className="emptyBlock">
                  <img src={empty} alt="Пусто" />
                  <p className="emptyText">Список ваших заявок пуст!</p>
                </div>
              </div>
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

