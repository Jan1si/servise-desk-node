import React from 'react'

export const NavBlock = () => {
  return (
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
  )
}
