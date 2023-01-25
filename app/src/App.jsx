import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.scss'

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NavBlock } from './components/NavBlock';

import { Main } from './Pages/Main';
import { Tasks } from './Pages/Tasks';
import { AuthForms } from './components/AuthForms';

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
              </Routes>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

