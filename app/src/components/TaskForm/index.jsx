import React from 'react'

export const TaskForm = () => {
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
          <div className="selectInput">
            <input name='category' type="text" disabled placeholder='Категория проблемы'/>
          </div>
          <div className="selectInput">
            <input name='priority' type="text" disabled placeholder='Приоритет заявки'/>
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
