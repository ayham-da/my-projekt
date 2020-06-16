import './App.css';
import React                                       from 'react';
import {BrowserRouter as Router, Route , Redirect , Switch} from 'react-router-dom'

import Users                                       from './user/pages/Users' 
import NewPlace                                    from './places/pages/NewPlace'
import MainHeader                                  from './shared/components/Nav/MainHeader'
import UserPlaces                                  from './places/pages/UserPlaces'
import UpdatePlace                                 from './places/pages/UpdatePlace';


const App = () => {
  return (
    <>
    <Router>
    <MainHeader/>
      <Switch>
        <Route path="/" exact>
          <Users/>
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces/>
        </Route>
        <Route path="/places/new" exact>       
          <NewPlace/>
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>

        <Redirect to="/" />

      </Switch>
    </Router>
    </>
    
  );
}

export default App;
