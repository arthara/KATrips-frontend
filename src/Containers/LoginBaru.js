import React, {Component} from 'react';
import './login.css';
import logo from '../assets/logo-fix.png';
import axios from 'axios';
import {Link, useHistory} from "react-router-dom";

function Login(){

    const[email,setEmail]= React.useState();
    const[password,setPassword ]= React.useState();
    const history = useHistory();

    const userLogin = {
        email : email,
        password : password
    };

    function submit(e){
        e.preventDefault();
        console.log(userLogin);
        axios.post('http://api.katrips.me/api/user/login',
            userLogin

        )
        .then
        (res=>{
            history.push("/HistoryPemesanan")
            console.log(res)
        })
        
        .catch(error=>{console.log(error)})
        ;
    }
        
    return (
            <div className="bgLogin">
                <div className="formLogin">
                    <img src={logo} className="centerLogin" alt="Logo" style={{height: "100px"}}/>
                    
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                    </div>

                    <button className="btn btn-primary btn-block" onClick={submit}>MASUK</button>
                    <button className="btn btn-link btn-block"><Link to='/Register'>DAFTAR AKUN</Link></button>
                </div>
            </div>
        )
  
}

export default Login;