import React from 'react'
import  './Tasks.scss'

export const Tasks = () => {
  return (
   <div className="listBlock">
      <div className="title">
        <h2>Журнал заявок</h2>
      </div>
      <ul className="tasklist">
      <div className="taskItem">
          <div className="headerItem">
            <div className="titleItem">
              <h2>Заголовок</h2>
            </div>
            <div className="priorityItem">
              <span>Приоритет</span>
            </div>
          </div>
          <div className="infoTask">
            <div className="categoryTask"><p>Категория заявки</p></div>
            <div className="userTask"><p>Фамилия Имя Отчество</p></div>
          </div>
          <div className="textTask">
            <p>
              Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается 
            </p>
          </div>
          <button className="btnSend">Принять</button>
        </div>

        <div className="taskItem">
          <div className="headerItem">
            <div className="titleItem">
              <h2>Заголовок</h2>
            </div>
            <div className="priorityItem">
              <span>Приоритет</span>
            </div>
          </div>
          <div className="infoTask">
            <div className="categoryTask"><p>Категория заявки</p></div>
            <div className="userTask"><p>Фамилия Имя Отчество</p></div>
          </div>
          <div className="textTask">
            <p>
              Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается 
            </p>
          </div>
          <button className="btnSend">Принять</button>
        </div>
        <div className="taskItem">
          <div className="headerItem">
            <div className="titleItem">
              <h2>Заголовок</h2>
            </div>
            <div className="priorityItem">
              <span>Приоритет</span>
            </div>
          </div>
          <div className="infoTask">
            <div className="categoryTask"><p>Категория заявки</p></div>
            <div className="userTask"><p>Фамилия Имя Отчество</p></div>
          </div>
          <div className="textTask">
            <p>
              Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается 
            </p>
          </div>
          <button className="btnSend">Принять</button>
        </div>

        <div className="taskItem">
          <div className="headerItem">
            <div className="titleItem">
              <h2>Заголовок</h2>
            </div>
            <div className="priorityItem">
              <span>Приоритет</span>
            </div>
          </div>
          <div className="infoTask">
            <div className="categoryTask"><p>Категория заявки</p></div>
            <div className="userTask"><p>Фамилия Имя Отчество</p></div>
          </div>
          <div className="textTask">
            <p>
              Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается 
            </p>
          </div>
          <button className="btnSend">Принять</button>
        </div>

        <div className="taskItem">
          <div className="headerItem">
            <div className="titleItem">
              <h2>Заголовок</h2>
            </div>
            <div className="priorityItem">
              <span>Приоритет</span>
            </div>
          </div>
          <div className="infoTask">
            <div className="categoryTask"><p>Категория заявки</p></div>
            <div className="userTask"><p>Фамилия Имя Отчество</p></div>
          </div>
          <div className="textTask">
            <p>
              Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается 
            </p>
          </div>
          <button className="btnSend">Принять</button>
        </div>

        <div className="taskItem">
          <div className="headerItem">
            <div className="titleItem">
              <h2>Заголовок</h2>
            </div>
            <div className="priorityItem">
              <span>Приоритет</span>
            </div>
          </div>
          <div className="infoTask">
            <div className="categoryTask"><p>Категория заявки</p></div>
            <div className="userTask"><p>Фамилия Имя Отчество</p></div>
          </div>
          <div className="textTask">
            <p>
              Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается 
            </p>
          </div>
          <button className="btnSend">Принять</button>
        </div>
      </ul>
      <div className="pagination">
        <ul className="pagList">
          <li className="bullet">
            <p>1</p>
          </li>
          <li className="bullet">
            <p>2</p>
          </li>
          <li className="bullet">
            <p>3</p>
          </li>
          <li className="bullet">
            <p>4</p>
          </li>
        </ul>
      </div>
   </div>
  )
}
