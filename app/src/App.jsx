import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.scss'

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NavBlock } from './components/NavBlock';
import { AuthForms } from './components/AuthForms';


import { Main } from './Pages/Main';
import { Tasks } from './Pages/Tasks';
import { UserTable } from './Pages/UserTable';
import { DepTable } from './Pages/DepTable';
import { CategTable } from './Pages/CategTable';
import { RoleTable } from './Pages/RoleTable';

export const App = () => {
  return (
    <div className="app">
      {/* <AuthForms /> */}
      <Header />
        <div className="main">
          <div className="container">
            <div className="mainBlock">
              <NavBlock />
              <Routes>
                <Route exact path='/' element={ <Main />} />
                <Route exact path='/tasks' element={ <Tasks />} />
                <Route exact path='/tables/users' element={ <UserTable />} />
                <Route exact path='/tables/departments' element={ <DepTable />} />
                <Route exact path='/tables/categories' element={ <CategTable />} />
                <Route exact path='/tables/roles' element={ <RoleTable />} />
              </Routes>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

