import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-fix.png';
import logoPlaystore from '../assets/playstore.png';
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
                        <li><Link to ='/AboutUs'>AboutUs</Link></li>
                        <li><Link to ='/Contact'>Contact</Link></li>
                        <li><Link to ='/'>Home</Link></li>
                    </ul>

               <div className="tengah"> 
                    <h1>Looking For<br/>A Train Trip Ticket?<br/>KATrips Be Help You</h1>
                    
                        <button class="buttonStart"><Link to ='/Login' style={{color:"white"}} >GET STARTED</Link></button>
                        <button class="buttonDownload">
                        <img src={logoPlaystore} className="centerHome" alt="Logo" style={
                        {
                            height: "34px",
                            align:"center"
                        }}/>   
                            <Link to ='/Android'>Download Now</Link>
                        </button>
                </div>
            </div>
        )
    }
}





