import React from 'react';
import Home from './Containers/Home.js';
import About from './Containers/About.js';
import Login from './Containers/LoginBaru.js';
import RegisterForm from './Containers/RegisterFormBaru.js';
import {Switch,Route,BrowserRouter} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/Home'component={Home}/>
          <Route exact path='/About'component={About}/>
          <Route exact path='/Login'component={Login}/>
          <Route exact path='/Register'component={RegisterForm}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
