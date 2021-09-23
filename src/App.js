import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dashboard from "./views/dashboard";
// import "./App.css";


function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;