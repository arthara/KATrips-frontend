import React, {Component} from 'react';
import './login.css';
import logo from '../assets/logo-fix.png';

export default class login extends Component {

    render() {
        return (
            <div className="bgLogin">
                <form>
                    return <img src={logo} class="center" alt="Logo" style={{height: "100px"}}/>;
                    
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>

                    <button className="btn btn-primary btn-block">MASUK</button>
                    <button className="btn btn-link btn-block">DAFTAR AKUN</button>
                </form>
            </div>
        )
    }
}