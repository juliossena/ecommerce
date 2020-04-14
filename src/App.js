import React from 'react';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
