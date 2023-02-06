import React from 'react';
import logo from '../../assets/logo.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import styles from './AuthForms.module.scss';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../../axios.js';

export const AuthForms = () => {

    const [openSelect, setOpenSelect] = useState(false);
    const [isShowRegister, setIsShowRegister] = useState(false);
    const [dataDepart, setDataDepart] = useState([]);
    const [selectDepart, setSelectDepart] = useState('');

    const {register:registerForm, 
           handleSubmit: handleRegister,
           setError: setErrorRegiter,
           setValue: setValueRegister} = useForm({
        defaultValues: {
            department: '',
            name: '',
            email: '',
            password: ''
        }
    });

    const {register:loginForm, 
          handleSubmit: handleLogin,
          setError: setErrorLogin} = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
 });

    useEffect(() => {
        try {
            const fetchData = async () => {
                const { data } = await axios.get('/departmens');
                const obj = JSON.parse(JSON.stringify(data.departments));
                setDataDepart(() => obj);
            }
            fetchData();
        } catch (error) {
            alert(`Неудалось получить данные! ${error}`);
        }
    },[]);

    const onSelectInput = (value) => {
        setSelectDepart(() => value);
        setValueRegister("department", value);
        setOpenSelect(() => false);
    }

    const onSubmitRegister = async (value) => {
        try {
            console.log(value);
            const { data } = await axios.post('/auth/register', value);
        } catch (error) {
            alert("Неудалось зарегистрироваться!");
        }
    }

    const onSubmitLogin = async (value) => {
        try {
            console.log(value);
            const { data } = await axios.post('/auth/login', value);
            console.log(data);
        } catch (error) {
            alert("Неудалось авторизоваться!");
        }
    }

  return (
    <div className={styles.wrapperAuth}>
        <div className={styles.authBlock}>
            <div className={isShowRegister ? styles.formBlock : styles.hiddenForm}>
                <div className={styles.logo}><img src={logo} alt="Логотип" /></div>
                <form onSubmit={handleRegister(onSubmitRegister)} method="post">
                    <div className={styles.titleForm}>
                        <h2>Регистрация</h2>
                    </div>
                    <div className={styles.selectGroup}>

                        <div className={styles.selectInput}>
                            <input name='department'
                                   type="text"
                                   readOnly={true}
                                   value={selectDepart}
                                   {...registerForm('department')}
                                   placeholder='Выберите отделение'/>
                            <div onClick={() => setOpenSelect((prev) => !prev)} className={styles.selectBtn}>
                                <img className={openSelect ? styles.active : ""} src={arrowLeft} alt="" />
                            </div>
                        </div>
                        <div className={openSelect ? styles.selectBlock : styles.selectBlockHide}>
                            <ul className={styles.selectList}>
                                {dataDepart.map((item, key) => 
                                    <li onClick={() => onSelectInput(item.title)} key={item._id + key} className={styles.selectItem}><p>{item.title}</p></li>
                                )}
                            </ul>
                        </div>

                    </div>
                    <div className={styles.listInputs}>
                        <div className={styles.inputGroup}>
                            <input name='name'
                             type="text"
                             {...registerForm('name')}
                             placeholder="Имя" />
                        </div>
                        <div className={styles.inputGroup}>
                            <input name='email'
                             {...registerForm('email')}
                             type="text"
                             placeholder="Email" />
                        </div>
                        <div className={styles.inputGroup}>
                            <input name='password'
                             {...registerForm('password')}
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
                    <button className={styles.btnSend}>Зарегистрироваться</button>
                </form>
            </div>

            <div className={isShowRegister ? styles.hiddenForm : styles.formBlock}>
                <div className={styles.logo}><img src={logo} alt="Логотип" /></div>
                <form onSubmit={handleLogin(onSubmitLogin)}>
                    <div className={styles.titleForm}><h2>Авторизация</h2></div>
                    <div className={styles.listInputs}>
                        <div className={styles.inputGroup}>
                            <input name='email' type="text" placeholder="Email" {...loginForm('email')}/>
                        </div>
                        <div className={styles.inputGroup}>
                            <input name='password' type="password" placeholder="Пароль" {...loginForm('password')}/>
                        </div>
                    </div>
                    <p className={styles.afterInfo}>Если у вас нет аккаунта, то вы можете 
                        <span onClick={() => setIsShowRegister((prev) => !prev)}> зарегистрироваться</span>
                    </p>
                    <button className={styles.btnSend}>Авторизоваться</button>
                </form>
            </div>
        </div>
    </div>
  )
}
