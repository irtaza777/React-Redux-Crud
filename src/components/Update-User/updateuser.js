import React from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import {updateUser} from './users';
//import {updateUser}from '../Features/Crud/users'

const Updateuser = () => {

const selectors = useSelector(state=>state.users);
const {id}= useParams();
const currentuser=selectors.filter((s)=>s.id==id);
const{name,email}=currentuser[0];
const [uname, setUname] = useState(name);
const [uemail, setUemail] = useState(email);
const navigate=useNavigate();

const dispatch=useDispatch();


    const updateAuser = (e) => {
e.preventDefault();
dispatch(updateUser({
id:id,
name:uname,
email:uemail

}))
navigate("/Home")
    }
    return ( <div>
        <br></br>
        <h3>Edit User</h3>
        <br></br>
        <div className="container">
        <form onSubmit={updateAuser} >


                <b>Name</b> <input type="text" className="form-control m-2"
                    value={uname} name="name" 
                    onChange={(e)=>{setUname(e.target.value)}}   required />

                <b>Email</b><input type="text" className="form-control m-2"
                    value={uemail} name="email"
                    onChange={(e)=>{setUemail(e.target.value)}}  required /> 

               
                <br></br>
                <button className='btn btn-success'>Update</button></form></div>
    </div> );
}
 
export default Updateuser;