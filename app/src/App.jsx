import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './index.scss'
import { Main } from './Pages/Main';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <div className="container">
          <div className="mainBlock">
            <Main />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

