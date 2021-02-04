import React from 'react'
import {Route, HashRouter as Router} from 'react-router-dom'
import Home from './Home'
import Results from './Results'
import Signup from './Signup'
import UserShow from './UserShow'
import Login from './Login'
import ProjectShow from './ProjectShow'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/results/:search" component={Results}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/user" component={UserShow}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/project/:id" component={ProjectShow}/>
      </div>
    </Router>
  );
}

export default App;
