import React from 'react'
import { useState } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';

export const TaskForm = () => {

  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenPriority, setIsOpenPriority] = useState(false);

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
    <div className="formBlock">
      <div className="title">
        <h2>Составление заявки</h2>
      </div>
      <form>
        <div className="inputGroup">
          <input name='title' type="text" placeholder='Заголовок заявки'/>
        </div>
        <div className="inputGroup">

          <div className="selectGroup">
            <div className="selectInput">
              <input name='category' type="text" disabled placeholder='Категория проблемы'/>
              <div onClick={() => openSelect("category")} className="selectBtn">
                <img className={isOpenCategory ? "active" : ''} src={arrowLeft} alt="" />
              </div>
            </div>
            <div className={isOpenCategory ? "selectBlock" : "hideSelectBlock"}>
              <ul className="selectList">
                <li className="selectItem">
                  <p>Категория 1</p>
                </li>
                <li className="selectItem">
                  <p>Категория 2</p>
                </li>
                <li className="selectItem">
                  <p>Категория 3</p>
                </li>
                <li className="selectItem">
                  <p>Категория 4</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="selectGroup">
            <div className="selectInput">
              <input name='priority' type="text" disabled placeholder='Приоритет заявки'/>
              <div onClick={() => openSelect("priority")} className="selectBtn">
                <img className={isOpenPriority ? "active" : ''} src={arrowLeft} alt="" />
              </div>
            </div>
            <div className={isOpenPriority ? "selectBlock" : "hideSelectBlock"}>
              <ul className="selectList">
                <li className="selectItem">
                  <p>Приоритет 1</p>
                </li>
                <li className="selectItem">
                  <p>Приоритет 2</p>
                </li>
                <li className="selectItem">
                  <p>Приоритет 3</p>
                </li>
                <li className="selectItem">
                  <p>Приоритет 4</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="inputGroup">
          <textarea name="dsec" placeholder='Опишите вашу проблему...'></textarea>
        </div>
      </form>
      <button className="sendFormBtn">Отправить</button>
    </div>
  )
}
