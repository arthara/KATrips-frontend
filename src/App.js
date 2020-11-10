import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RegisterForm from "./containers/RegisterForm";


function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <RegisterForm/>
        </div>
      </div>
    </div>
  );
}

export default App;