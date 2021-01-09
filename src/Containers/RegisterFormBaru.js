import React, {Component} from 'react';
import './Register.css';
import logo from '../assets/logo-fix.png';
import Login from './LoginBaru.js';
import axios from 'axios';
import {Link, useHistory} from "react-router-dom";
import { error } from 'jquery';

function Register(){
   
        const[nama,setNama]= React.useState();
        const[email,setEmail]= React.useState();
        const[password,setPassword ]= React.useState();
        const[passwordUlang,setPasswordUlang]= React.useState();
        const[tanggalLahir,setTanggalLahir]= React.useState();
        const[alamat,setAlamat]= React.useState();
        const history = useHistory();

        const user ={
            nama : nama, 
            email : email , 
            password : password , 
            password_confirmation : passwordUlang, 
            alamat : alamat, 
            tgl_lahir : tanggalLahir
        };

        function submit(e){
            e.preventDefault();
            console.log(user);
            axios.post('http://api.katrips.me/api/user/register',
                user

            )
            .then
            (res=>{
                history.push("/Login")
                console.log(res)
            })
            
            .catch(error=>{console.log(error)})
            ;
        }

    
    return (
            <div className="bgRegister">
                <div className="formRegister">
                    <img src={logo} className="center2" alt="Logo" style={{height: "100px"}}/>
                        
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nama" onChange={e=>setNama(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email"onChange={e=>setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password"onChange={e=>setPassword(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Ulang Password" onChange={e=>setPasswordUlang(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <input type="date" className="form-control" placeholder="Tanggal Lahir"onChange={e=>setTanggalLahir(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Alamat" onChange={e=>setAlamat(e.target.value)}/>
                    </div>
                    
                    
                    <button className="rounded btn btn-primary btn-block btn-circle btn-xl" onClick={submit}>DAFTAR AKUN</button>
                    <button className="rounded btn btn-default btn-block btn-circle btn-xl"><Link to='/Login'>Masuk</Link></button>
                </div>
            </div>
        )
}

export default Register;