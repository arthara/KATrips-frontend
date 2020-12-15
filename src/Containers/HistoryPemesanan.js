import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logoProduk from '../assets/logo-fix.png';
import Gambar from '../assets/Picture1.svg';
import Gambar2 from '../assets/Picture2.png';
import './HistoryPemesanan.css';

function History(){
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
                                <p class = "kiri">User A <br/>
                                    Kereta Jayabaya<br/>
                                    Surabaya - Yogyakarta<br/>
                                    Selasa, 20 Oktober 2020; 10.00 WIB
                                </p>
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

export default History;