import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-fix.png';
import './about_us.css'


export default class about_us extends Component{
    render(){
        return(
                <div class = "bg2">
                    <ul>
                        <img src={logo} className="centerHome" alt="Logo"style={{height: "34px",align:"left"}}/>
                            <li><Link to ='/Login'>Sign in</Link></li>
                            <li><Link to ='/AboutUs'>AboutUs</Link></li>
                            <li><Link to ='/Contact'>Contact</Link></li>
                            <li><Link to ='/'>Home</Link></li>
                    </ul>

                    <div class = "kotakDT">
                        <p class = "about">Halaman About Us Sedang Pembuatan</p>
                    </div>
                </div>
        )
    }
}