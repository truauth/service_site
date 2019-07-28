import React from 'react';

import { BrowserRouter as Rotuer, Route } from 'react-router-dom';

import * as Screen from './screens';
import { withDashboard, withLanding } from './components/layouts';


import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <main className="application-main">
      <Rotuer>
        <Route exact path="/" component={withLanding(Screen.Home)}/>
        <Route exact path="/register/user" component={Screen.RegisterUser} />
        <Route exact path="/dashboard" component={withDashboard(Screen.Dashboard)} />
      </Rotuer> 
    </main>
  );
}

export default App;
