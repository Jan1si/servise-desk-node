import React from 'react'
import { useState, useEffect } from 'react';
import axios from '../../axios.js';

import arrowLeft from '../../assets/arrow-left.svg';
import styles from './TaskForm.module.scss';

export const TaskForm = () => {

  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenPriority, setIsOpenPriority] = useState(false);
  const [dataCaregories, setDataCategories] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await axios.get('/categories');
        const obj = JSON.parse(JSON.stringify(data.categories));
        setDataCategories(() => obj);
      }
      fetchData();
    } catch (error) {
      alert(`Неудалось получить данные! ${error}`);
    }
  },[]);

  /**
   * 
   * @param {String} name
   * Передаётся имя селектора
   * @returns { void } 
   * Изменяет состояние в зависимости от параметра
   */
  const openSelect = (name) => {
      switch(name) {
        case 'category':
          setIsOpenCategory((prev) => !prev);
          break;
        case 'priority':
          setIsOpenPriority((prev) => !prev);
          break;
        default:
          break;
      }
  };

  return (
    <div className={styles.formBlock}>
      <div className={styles.title}>
        <h2>Составление заявки</h2>
      </div>
      <form>
        <div className={styles.inputGroup}>
          <input name='title' type="text" placeholder='Заголовок заявки'/>
        </div>
        <div className={styles.inputGroup}>

          <div className={styles.selectGroup}>
            <div className={styles.selectInput}>
              <input name='category' type="text" disabled placeholder='Категория проблемы'/>
              <div onClick={() => openSelect("category")} className={styles.selectBtn}>
                <img className={isOpenCategory ? styles.active : ''} src={arrowLeft} alt="" />
              </div>
            </div>
            <div className={isOpenCategory ? styles.selectBlock : styles.hideSelectBlock}>
              <ul className={styles.selectList}>
                {dataCaregories.map((item, key) => 
                  <li key={item._id + key} className={styles.selectItem}>
                    <p>{item.title}</p>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className={styles.selectGroup}>
            <div className={styles.selectInput}>
              <input name='priority' type="text" disabled placeholder='Приоритет заявки'/>
              <div onClick={() => openSelect("priority")} className={styles.selectBtn}>
                <img className={isOpenPriority ? styles.active : ''} src={arrowLeft} alt="Стрелка" />
              </div>
            </div>
            <div className={isOpenPriority ? styles.selectBlock : styles.hideSelectBlock}>
              <ul className={styles.selectList}>
                <li className={styles.selectItem}>
                  <p>Приоритет 1</p>
                </li>
                <li className={styles.selectItem}>
                  <p>Приоритет 2</p>
                </li>
                <li className={styles.selectItem}>
                  <p>Приоритет 3</p>
                </li>
                <li className={styles.selectItem}>
                  <p>Приоритет 4</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className={styles.inputGroup}>
          <textarea name="dsec" placeholder='Опишите вашу проблему...'></textarea>
        </div>
      </form>
      <button className={styles.sendFormBtn}>Отправить</button>
    </div>
  )
}
