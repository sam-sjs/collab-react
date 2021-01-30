import React from 'react'
import {Route, HashRouter as Router} from 'react-router-dom'
import Home from './Home'
import Results from './Results'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/results/:search" component={Results}/>
      </div>
    </Router>
  );
}

export default App;
