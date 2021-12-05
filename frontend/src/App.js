import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Map from './components/Map/Map';
import Footer from "./components/Footer/Footer"
import Dashboard from './components/landing/Dashboard'
import Card from './components/Homepage/Cards';
import "./App.css";
import { Stats } from './components/Homepage/Stats';
import Guidelines from './components/Guidelines/Guidelines';

function App() {
  return (
  
    <Router>
<div className="app">
  <Navbar/>
  <Switch>
  <Route path="/map">
      <Map/>
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
    <Route path="/resources">
    <Dashboard/>
    </Route>

    <Route path="/guidelines">
      <Guidelines />
    </Route>
        
          <Route path="/data">
            <Card/>
      <Stats />
      </Route>
    
   
  
   
  </Switch>
</div>
</Router>
  
  );
}

export default App;
