import React, {Component} from 'react';
import './Register.css';

export default class Register extends Component {

    render() {
        return (
            <form>
                <image src="../assets/logo-fix.png"/>
                
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nama" />
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                    <i class="far fa-eye" id="togglePassword"></i>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Ulang Password" />
                </div>

                <div className="form-group">
                    <input type="date" className="form-control" placeholder="Tanggal Lahir" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Alamat" />
                </div>

                <button className="btn btn-primary btn-block btn-circle btn-xl">DAFTAR AKUN</button>
                <button className="btn btn-default btn-block btn-circle btn-xl">MASUK</button>
            </form>
        )
    }
}