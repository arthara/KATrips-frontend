import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logoProduk from '../assets/logo-fix.png';
import Gambar from '../assets/Picture1.svg';
import Gambar2 from '../assets/Picture2.png';
import axios from 'axios';
import './HistoryPemesanan.css';

//Halo
export default class History extends Component{
    constructor(props) {
        super(props);
        this.state = {
          perjalanan: []
        };
      }
      
      
      
      componentDidMount() {
        axios.post(' http://api.katrips.me/api/user/cari-perjalanan',
            {
                lokasi_berangkat_id: 1,
                lokasi_tiba_id: 2,
                tanggal_berangkat: '2021-01-17',
                jmlh_penumpang_dewasa: 1,
                jmlh_penumpang_bayi: 0,
                halo: 2,
            },
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }
        )

        .then
        (res=>{
            this.state.perjalanan = res.data.Perjalanan;
        })
        .catch(error=>{console.log(error)});
      }

    historyPemesanan = () =>{
        let view = []
        // Outer loop to create parent
        console.log(this.state.perjalanan);
        for (const value in this.state.perjalanan) {
            view.push(<p class = "kiri"> <br/>
            Harga : {value.harga} <br/>
            Waktu Berangkat : {value.waktu_berangkat} <br/>
            Waktu Tiba : {value.waktu_tiba} <br/>
            </p>)
        }
        return view;
    }
      
    render(){
        return(
                        <div className="bodyHistory">
                                    <div className="bgHistory">
                                    <ul>
                                        <img src={logoProduk} className="logo" alt="Logo" />
                                        <li><Link to ='/Login'>Sign out</Link></li>
                                    </ul>
                                    <div className="historyPemesanan">Upcoming</div>
                                    <div class="kotakTengahUpcoming">
                                        <div class="bagianKiri">
                                            { this.historyPemesanan }
                                        </div>
                                        <div class="bagianKanan">
                                            <p class = "kanan">
                                                Rp500.000 <img src={Gambar} className="gambar" alt="logo"></img>
                                            </p>
                                        </div>
                                    </div>
                            
                                    <div class="kotakTengahUpcomingMore">
                                        <div class="bagianKiri">
                                            <p class="kiri">
                                                More Details
                                            </p>
                                        </div>
                            
                                        <div class="bagianKanan">
                                            <img src={Gambar2} className="more" alt="Logo"/>
                                        </div>  
                                    </div>
                         </div>
                    </div>
        )
    }
}