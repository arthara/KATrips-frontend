import React, {Component} from 'react';
import logo from '../assets/logo-fix.png';
import { Link } from 'react-router-dom';
import './About.css';


export default class About extends Component{
    render(){
        return(
        <div class="bg">
		<ul>
            <img src={logo} class="logo" alt="Logo"/>;    
			<li><Link to ='/Login'>Sign in</Link></li>
			<li><Link to ='/About'>About</Link></li>
			<li><Link to ='/'>Home</Link></li>
		</ul>

		<div class="kotakTengah">
			<div class="bagianKiri">
                 <img src={logo} class="logo1" alt="Logo"/><br/>
				<button class="button2">
					GET STARTED</button>
				<button class="button1">DOWNLOAD NOW</button>
			</div>
			<div class="bagianKanan">
				<h3>About KATrips</h3>
				<p class="paragaf1">
					KATrips is A Mobile Application
					<br/>that can Help you search and
					<br/>book for train tickets for
					<br/>travelling online
				</p>
				<p class="paragaf2">
					+62 812 478 648**<br/>
				</p>
				<p class="paragaf3">
					kel1wppl@gmail.com
				</p>
			</div>
		</div>
	</div>
        )
    }
}