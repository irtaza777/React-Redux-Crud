import React from 'react';
import { useDispatch } from 'react-redux'

import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {addUser} from './users';

const Adduser = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const[name,SetName]=useState('');
    const[email,SetEmail]=useState('');

    const adddata=(e)=>{
        e.preventDefault();
dispatch(addUser(name,email));
navigate("/Home")
    }
    return ( <div>
<h1>Add user</h1>

<Container>
                <form onSubmit={adddata}>
                    <br></br>
                    <div className="form-group">
                        <input type="TEXT" className="form-control" placeholder="name"
                            value={name} onChange={(e)=>{SetName(e.target.value)}} required />

                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="TEXT" className="form-control" placeholder="email"
                            value={email} onChange={(e)=>{SetEmail(e.target.value)}} required />

                    </div>
                    <br></br>
                    
                    <button  type="submit" className="btn btn-success m-2">Add User</button>

                </form>
            </Container>


    </div> );
}
 
export default Adduser;