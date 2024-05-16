import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {removeUser} from './users';

import { Table } from 'react-bootstrap';
 function Home() {
    const selectors = useSelector(state=>state.users);
    const dispatch=useDispatch();
    return (
        <div className="container" >
            <br></br>
            <h3>Users data</h3>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th> Name</th>
                        <th>Email</th>
                        <th>Operations</th>




                    </tr>
                </thead>


                <tbody>
{selectors.map((selector)=>
<tr>
<td key={selector.id}>{selector.id}</td>
<td>{selector.name}</td>
<td>{selector.email}</td>
<td>
<Link to={"/updateuser/" + selector.id}><button className="btn btn-success">Edit</button></Link>
    <button className="btn btn-danger m-2" onClick={()=>dispatch(removeUser(selector.id))} >X</button>
</td>
</tr>
)}


                </tbody>
            </Table>  </div >
    )
}
export default Home