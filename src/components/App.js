import React from 'react'
import {Route, HashRouter as Router} from 'react-router-dom'
import Home from './Home'
import Results from './Results'
import Signup from './Signup'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/results/:search" component={Results}/>
        <Route exact path="/signup" component={Signup}/>
      </div>
    </Router>
  );
}

export default App;