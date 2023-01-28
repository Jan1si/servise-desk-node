import React from 'react'
import './UserTable.scss';

export const UserTable = () => {
  return (
    <div className="tableBlock">
        <table class="table">
            <thead className='tHead'>
                <tr className='row-head'>
                    <th className='col-head'>Заголовок</th>
                    <th className='col-head'>Заголовок</th>
                    <th className='col-head'>Заголовок</th>
                    <th className='col-head'>Заголовок</th>
                </tr>
            </thead>
            <tbody className='tBody'>
                <tr className='row-body'>
                    <td className='col-body'>Ячейка</td>
                    <td className='col-body'>Ячейка</td>
                    <td className='col-body'>Ячейка</td>
                    <td className='col-body'>Ячейка</td>
                </tr>
                <tr className='row-body'>
                    <td className='col-body'>Ячейка</td>
                    <td className='col-body'>Ячейка</td>
                    <td className='col-body'>Ячейка</td>
                    <td className='col-body'>Ячейка</td>
                </tr>
                <tr className='row-body'>
                    <td className='col-body'>Ячейка</td>
                    <td className='col-body'>Ячейка</td>
                    <td className='col-body'>Ячейка</td>
                    <td className='col-body'>Ячейка</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
