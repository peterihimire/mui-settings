import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/auth/Login/Login";
import Register from "./views/auth/Register/Resgister";
import Dashboard from "./views/dashboard";
// import "./App.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Register} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
