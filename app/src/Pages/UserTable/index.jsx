import React, { useEffect, useState }  from 'react'
import axios from '../../axios.js'
import { TableRow } from '../../components/TableRow';
import './UserTable.scss';

export const UserTable = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
       async function fetchData(){
        try {
            const { data } = await axios.get('/users');
            const obj = JSON.parse(JSON.stringify(data.users));
            setUserData(() => obj);
        } catch (error) {
            alert(`Неудалось получить данные! ${error}`)
        }
       }
       fetchData()
    }, [])

    console.log(userData);
    
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
                {userData.map((item, key)=> 
                    <TableRow  key={key} childKey={key} value={item} />
                )}
                
            </tbody>
        </table>
    </div>
  )
}
