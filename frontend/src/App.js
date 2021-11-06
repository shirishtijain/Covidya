import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Map from './components/Map/Map';

import "./App.css";
import { Stats } from './components/Homepage/Stats';


function App() {
  return (
  
    <Router>
<div className="app">
  
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
    <Route path="/">
      <Stats />
    </Route>
   
   
   
  </Switch>
</div>
</Router>
  
  );
}

export default App;
