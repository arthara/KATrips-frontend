import React from 'react';
import Home from './Containers/Home.js';
import Contact from './Containers/Contact.js';
import Login from './Containers/LoginBaru.js';
import RegisterForm from './Containers/RegisterFormBaru.js';
import HistoryPemesanan from './Containers/HistoryPemesanan.js';
import About from './Containers/about_us.js';
import {Switch,Route,BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/'component={Home}/>
          <Route exact path='/Contact'component={Contact}/>
          <Route exact path='/Login'component={Login}/>
          <Route exact path='/Register'component={RegisterForm}/>
          <Route exact path='/HistoryPemesanan'component={HistoryPemesanan}/>
          <Route exact path='/AboutUs' component={About}/>
          <Route exact path='/Android' render={() => (window.location = "https://drive.google.com/drive/folders/15KXBO1AXA3IrjnQIRxqlTIogNMDIw8Sr")}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
