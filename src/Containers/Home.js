import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-fix.png';
import './Home.css';

export default class Home extends Component{
    render(){
        return(
            <div className="bg">
                    <ul>
                    <img src={logo} className="centerHome" alt="Logo" style={
                        {
                            height: "34px"
                        }
                       
                        }/>
                        <li><Link to ='/Login'>Sign in</Link></li>
                        <li><Link to ='/About'>About</Link></li>
                        <li><Link to ='/'>Home</Link></li>
                    </ul>

               <div className="tengah"> 
                    <h1>Looking For<br/>A Train Trip Ticket?</h1>
                    <h2>KATrips can be help you! </h2>
                    <button class="buttonStart">GET STARTED</button>
                    <button class="buttonDownload">DOWNLOAD NOW</button>
                </div>
            
            </div>
        )
    }
}





