import React from 'react';
import logo from '../../assets/logo.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import styles from './AuthForms.module.scss';

import { useState } from 'react';

export const AuthForms = () => {

    const [openSelect, setOpenSelect] = useState(false);
    const [isShowRegister, setIsShowRegister] = useState(false);

  return (
    <div className={styles.wrapperAuth}>
        <div className={styles.authBlock}>
            <div className={isShowRegister ? styles.formBlock : styles.hiddenForm}>
                <div className={styles.logo}><img src={logo} alt="Логотип" /></div>
                <form>
                    <div className={styles.titleForm}><h2>Регистрация</h2></div>
                    <div className={styles.selectGroup}>
                        <div className={styles.selectInput}>
                            <input name='department'
                                   type="text"
                                   disabled
                                   placeholder='Выберите отделение'/>
                            <div onClick={() => setOpenSelect((prev) => !prev)} className={styles.selectBtn}>
                                <img className={openSelect ? styles.active : ""} src={arrowLeft} alt="" />
                            </div>
                        </div>
                        <div className={openSelect ? styles.selectBlock : styles.selectBlockHide}>
                            <ul className={styles.selectList}>
                                <li className={styles.selectItem}><p>Отдел 1</p></li>
                                <li className={styles.selectItem}><p>Отдел 2</p></li>
                                <li className={styles.selectItem}> <p>Отдел 3</p></li>
                                <li className={styles.selectItem}><p>Отдел 4</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.listInputs}>
                        <div className={styles.inputGroup}>
                            <input name='name'
                             type="text"
                             placeholder="Имя" />
                        </div>
                        <div className={styles.inputGroup}>
                            <input name='email'
                             type="text"
                             placeholder="Email" />
                        </div>
                        <div className={styles.inputGroup}>
                            <input name='password'
                             type="password"
                             placeholder="Пароль" />
                        </div>
                        <div className={styles.inputGroup}>
                            <input name='password-check'
                             type="password"
                             placeholder="Повторите пароль" />
                        </div>
                    </div>
                    <p className={styles.afterInfo}>Если у вас уже есть аккаунт, то нажмите 
                        <span onClick={() => setIsShowRegister((prev) => !prev)}> войти</span>
                    </p>
                    <button className={styles.btnSend}>Зарегестрироваться</button>
                </form>
            </div>

            <div className={isShowRegister ? styles.hiddenForm : styles.formBlock}>
                <div className={styles.logo}><img src={logo} alt="Логотип" /></div>
                <form>
                    <div className={styles.titleForm}><h2>Авторизация</h2></div>
                    <div className={styles.listInputs}>
                        <div className={styles.inputGroup}>
                            <input name='email'
                                   type="text"
                                   placeholder="Email" />
                        </div>
                        <div className={styles.inputGroup}>
                            <input name='password' type="password" placeholder="Пароль" />
                        </div>
                    </div>
                    <p className={styles.afterInfo}>Если у вас нет аккаунта, то вы можете 
                        <span onClick={() => setIsShowRegister((prev) => !prev)}> зарегестрироваться</span>
                    </p>
                    <button className={styles.btnSend}>Авторизоваться</button>
                </form>
            </div>
        </div>
    </div>
  )
}
