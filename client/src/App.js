import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Saved from './pages/Saved';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/saved" component={Saved} /> 
    </div>
  </Router>
);
}

export default App;
