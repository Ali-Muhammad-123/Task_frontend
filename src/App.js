import './App.css';
import Navbar from './components/Navbar.js';
import {Route , Switch} from "react-router-dom";
import Login from './components/login.js';
import Register from './components/register.js';
import Student from './components/student.js';

function App() {
  return (
    <div>
    <Navbar/>
    
    <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route path="/student" component={Student} />

  </Switch>
  </div>
    );
}

export default App;
