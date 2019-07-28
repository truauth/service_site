import React from 'react';

import { BrowserRouter as Rotuer, Route } from 'react-router-dom';

import * as Screen from './screens';

import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Rotuer>
        <Route exact path="/" component={Screen.Home}/>
        <Route exact path="/register/user" component={Screen.RegisterUser} />
      </Rotuer> 
    </div>
  );
}

export default App;
