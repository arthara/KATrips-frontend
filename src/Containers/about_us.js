import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-fix.png';
import './about_us.css'
import virtualHive from '../Foto Sponsor/logo-virtuahive-300dpi.png';
import rasyidTechno from '../Foto Sponsor/logo-rasyidtechnologies-300dpi.png';
import PTI from '../Foto Sponsor/PTI - Logo NEW (HQ).png';
import maulidanGame from '../Foto Sponsor/logo-maulidangames-landscape-300dpi.png';
import sindika from '../Foto Sponsor/logo - sinergi dimensi informatika.png';
import rasyidInstitute from '../Foto Sponsor/logo-rasyidinstitute-300dpi.png';
import trustMedis from '../Foto Sponsor/trustmedis.png';
import altera from '../Foto Sponsor/Alterra-Logo---Full-Colour-2000x2000.png';
import profiku from '../Foto Sponsor/logo profilku - for light bg.png';




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

                    <div class="kotakDT">
                        <p class = "about">Supported By</p>
                            <img src={virtualHive} style ={{height:"64px",marginRight:"20px"}} />
                            <img src={rasyidTechno} style ={{height:"64px",marginRight:"20px"}} />
                            <img src={PTI} style ={{height:"64px",marginRight:"20px"}} />
                            <img src={maulidanGame} style ={{height:"44px",marginRight:"20px"}} />
                    </div>

                    <div class="kotakSponsor">
                        <p class = "about">Sponsored By</p>
                            <img src={sindika} style ={{height:"64px",marginRight:"20px"}} />
                            <img src={rasyidInstitute} style ={{height:"64px",marginRight:"20px"}} />
                            <img src={trustMedis} style ={{height:"64px",marginRight:"20px"}} />
                            <img src={altera} style ={{height:"84px",marginRight:"20px"}} />
                            <img src={profiku} style ={{height:"84px",marginRight:"20px"}} />
                    </div>

                    <div class = "kotakDT">
                        <p class = "about">Industry SuperVisors<br/><br/>
                        Maulidan Bagus Afridian Rasyid<br/>
                        (Founder Maulidan Games dan Rasyid Technologies)<br/>
                        Willy Achmat Fauzi<br/>
                        (CEO Sindika)<br/>
                        Achmad Zulkarnain<br/>
                        (CEO dan Co-Founder TrustMedis)<br/>
                        Arie Affianto<br/>
                        (Founder Profilku Mobile dan Samsung Developer Warrior)<br/>
                        Tegar Imansyah<br/>
                        (Software RnD in System Architect Alterra)<br/>
                        </p>
                    </div>

                    
                    
                    <div class = "kotakDT">
                        <p class = "about">Dosen Prodi Teknik Informatika PENS <br/><br/>
                                Umi Sa'adah<br/>
                                Desy Intan Permatasari <br/> 
                                Andhik Ampuh Yunanto<br/>
                        </p>
                    </div>

                    <div class = "kotakDT">
                        <p class = "about">Mentors<br/><br/>
                        Mayshella Ainun Wakhidah<br/>
                        Andika Ahmad Ramadhan<br/>
                        Fandi Ahmad<br/>
                        Ardian Kristya Pratama<br/>
                        Angga Pradipta Kurnia Putra<br/>
                        Muhammad Alif Pradipta ADP<br/>
                        Rafly Arief Kanza<br/>
                        Ahmad Jarir At Thobari<br/>
                        Ajie Dibyo Respati<br/>
                        </p>
                    </div>
                
                    
                    
                    <div class = "kotakDT">
                        <p class = "about">Developer Team <br/><br/>
                        Muhammad Nisar Yanuar Utomo<br/>
                        Ahmad Maulana Jihad <br/> 
                        Helmi Darmawan <br/>
                        Intan Fitri <br/>
                        Ardiansyah Dwi S <br/>
                        Faidza Fariq A<br/>
                        </p>
                    </div>
                
        
                </div>
        )
    }
}