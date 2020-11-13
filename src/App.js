import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginForm from "./containers/login";


function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <LoginForm/>
        </div>
      </div>
    </div>
  );
}

export default App;