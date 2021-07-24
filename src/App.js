import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import LandingPage from './Components/Landing/LandingPage';
import AdminLogin from './Components/Admin/AdminLogin';
import ManagerLogin from './Components/Manager/ManagerLogin';
import CheckerLogin from './Components/Checker/CheckerLogin';
import VendorLogin from './Components/Vendor/VendorLogin';

const App=() => {
  return (
    <>
      <Router>
        <LandingPage />

        <div>
          <Switch>
           {/* <Route exact path="/"  component={LandingPage} />  */}
            <Route path="/adminlogin" component={AdminLogin} />
            <Route path="/managerlogin" component={ManagerLogin} />
            <Route path="/checkerlogin" component={CheckerLogin} />
            <Route path="/vendorlogin" component={VendorLogin} />
          
          </Switch>
        </div>
        
      </Router>
    </>

    
  );
}

export default App;
