import React from 'react';
import Home from './Containers/Home.js';
import About from './Containers/About.js';
import {Switch,Route,BrowserRouter} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Switch>n
        <Route exact path='/Home/'component={Home}/>
        <Route exact path='/About/'component={About}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
