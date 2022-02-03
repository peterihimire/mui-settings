import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/auth/Login/Login";
import Register from "./views/auth/Register/Resgister";
import Dashboard from "./views/dashboard";
import "./App.css";
import ForgotPassword from "./views/auth/ForgotPassword/ForgotPassword";
import Authenticate from "./authenticate";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Switch>
          <Authenticate>
            <Route exact path="/" component={Login} />
            <Route exact path="/forget-password" component={ForgotPassword} />
            <Route exact path="/signup" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="*" component={() => <div>Page not found</div>} />
          </Authenticate>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
