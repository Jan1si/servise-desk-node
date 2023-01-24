import React from 'react';
import logo from '../../assets/logo.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import { useState } from 'react';

export const AuthForms = () => {

    const [openSelect, setOpenSelect] = useState(false);


  return (
    <div className="wrapperAuth">
        <div className="authBlock">
            {/* <div className="formBlock">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <form>
                    <div className="titleForm">
                        <h2>Регистрация</h2>
                    </div>
                    <div className="selectGroup">
                        <div className="selectInput">
                            <input name='department' type="text" disabled placeholder='Выберите отделение'/>
                            <div onClick={() => setOpenSelect((prev) => !prev)} className="selectBtn">
                                <img className={openSelect ? "active" : ""} src={arrowLeft} alt="" />
                            </div>
                        </div>
                        <div className={openSelect ? "selectBlock" : "selectBlockHide"}>
                            <ul className="selectList">
                                <li className="selectItem">
                                    <p>Отдел 1</p>
                                </li>
                                <li className="selectItem">
                                    <p>Отдел 2</p>
                                </li>
                                <li className="selectItem">
                                    <p>Отдел 3</p>
                                </li>
                                <li className="selectItem">
                                    <p>Отдел 4</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="listInputs">
                        <div className="inputGroup">
                            <input name='name' type="text" placeholder="Имя" />
                        </div>
                        <div className="inputGroup">
                            <input name='email' type="text" placeholder="Email" />
                        </div>
                        <div className="inputGroup">
                            <input name='password' type="password" placeholder="Пароль" />
                        </div>
                        <div className="inputGroup">
                            <input name='password-check' type="password" placeholder="Повторите пароль" />
                        </div>
                    </div>
                    <button className="btnSend">Зарегестрироваться</button>
                </form>
            </div> */}

            {/* <div className="formBlock">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <form>
                    <div className="titleForm">
                        <h2>Авторизация</h2>
                    </div>
                    
                    <div className="listInputs">
                        
                        <div className="inputGroup">
                            <input name='email' type="text" placeholder="Email" />
                        </div>
                        <div className="inputGroup">
                            <input name='password' type="password" placeholder="Пароль" />
                        </div>
                        
                    </div>
                    <button className="btnSend">Авторизоваться</button>
                </form>
            </div> */}
        </div>
    </div>
  )
}
