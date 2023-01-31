import React  from 'react'
import { TableRow } from '../../components/TableRow';
import './UserTable.scss';


export const UserTable = () => {

  return (
    <div className="tableBlock">
        <table className="table">
            <thead className='tHead'>
                <tr className='row-head'>
                    <th className='col-head'>
                        <div className="col-content">#</div>
                    </th>
                    <th className='col-head'><div className="col-content">Имя</div></th>
                    <th className='col-head'><div className="col-content">Отделение</div></th>
                    <th className='col-head'><div className="col-content">Роль</div></th>
                    <th className='col-head'><div className="col-content">Email</div></th>
                </tr>
            </thead>
            <tbody className='tBody'>
                {[...Array(5)].map((item, key)=> 
                    <TableRow key={key} childKey={key} />
                )}
                
            </tbody>
        </table>
    </div>
  )
}
