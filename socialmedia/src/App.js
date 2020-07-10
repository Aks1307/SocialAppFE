import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import home from './pages/home'
import login from './pages/login'
import signUp from './pages/signup'
import Navbar from './componenets/navbar';
class App extends Component{
  render(){
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="container">
        <Switch>
          <Route exact path='/' component={home}/>
          <Route exact path='/login' component={login}/>
          <Route exact path='/signUp' component={signUp}/>
        </Switch>
          </div>   
        
      </Router>
    
    </div>
  );
  }
}

export default App;
