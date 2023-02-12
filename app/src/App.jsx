import React, { useEffect, useState, createContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import axios from './axios.js';
import './index.scss'

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NavBlock } from './components/NavBlock';
import { AuthForms } from './components/AuthForms';


// import { Main } from './pages/Main';
// import { Tasks } from './pages/Tasks';
// import { UserTable } from './pages/UserTable';
// import { DepartTable } from './pages/DepartTable';
// import { CategTable } from './pages/CategTable';
// import { RoleTable } from './pages/RoleTable';

import { Main } from './Pages/Main';
import { Tasks } from './Pages/Tasks';
import { UserTable } from './Pages/UserTable';
import { DepartTable } from './Pages/DepartTable';
import { CategTable } from './Pages/CategTable';
import { RoleTable } from './Pages/RoleTable';

export const UserContext = createContext({});

export const App = () => {

  const [userData, setUserData] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    try {
      const fetchAuth = async () => {
        const { data } = await axios.get('/auth/me');
        data ? setIsAuth(() => true) : setIsAuth(() => false);
        setUserData(() => data);
      }
      fetchAuth();
    } catch (error) {
      // alert("Неудалось получить данные о пользователе!");
      console.log(error)
    }
  },[]);

  return (
    <div className="app">
      <UserContext.Provider value={{
        userData,
        isAuth
      }}>
        {!isAuth ? 
        (<AuthForms />) 
        : 
        (<>
          <Header />
            <div className="main">
              <div className="container">
                <div className="mainBlock">
                  <NavBlock userData={userData} />
                  <Routes>
                    <Route exact path='/' element={ <Main />} />
                    <Route exact path='/tasks' element={ <Tasks />} />
                    <Route exact path='/tables/users' element={ <UserTable />} />
                    <Route exact path='/tables/departments' element={ <DepartTable />} />
                    <Route exact path='/tables/categories' element={ <CategTable />} />
                    <Route exact path='/tables/roles' element={ <RoleTable />} />
                  </Routes>
                </div>
              </div>
            </div>
          <Footer />
        </>)}
        
      </UserContext.Provider>
      
    </div>
  )
}

