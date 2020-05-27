import React                            from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Users                            from './user/pages/Users'  

const App = () => {
  return (
    <>
    <Router>
      <Route path="/"></Route>
        <Users/>
    </Router>
    </>
    
  );
}

export default App;
