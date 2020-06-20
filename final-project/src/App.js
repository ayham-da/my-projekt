import './App.css';
import React , { useState, useCallback }                                      from 'react';
import {BrowserRouter as Router, Route , Redirect , Switch} from 'react-router-dom'

import Users                                       from './user/pages/Users' 
import NewPlace                                    from './places/pages/NewPlace'
import MainHeader                                  from './shared/components/Nav/MainHeader'
import UserPlaces                                  from './places/pages/UserPlaces'
import UpdatePlace                                 from './places/pages/UpdatePlace';
import HomePage                                    from './Home/pages/HomePage';
import AllPlaces                                   from './places/pages/AllPlaces';
import Contact                                     from './Home/pages/Contact';
import AboutUs                                     from './Home/pages/AboutUs';
import Auth                                        from './user/pages/Auth'
import { AuthContext }                             from './shared/components/Context/auth-Context';


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/All-Users" exact>
          <Users/>
        </Route>
        <Route path="/All-places" exact>
          <AllPlaces/>
        </Route>
        <Route path="/Contact" exact>
          <Contact/>
        </Route>
        <Route path="/AboutUs" exact>
          <AboutUs/>
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
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/All-Users" exact>
          <Users/>
        </Route>
        <Route path="/All-places" exact>
          <AllPlaces/>
        </Route>
        <Route path="/Contact" exact>
          <Contact/>
        </Route>
        <Route path="/AboutUs" exact>
          <AboutUs/>
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces/>
        </Route>
        <Route path="/auth" exact>
          <Auth/>
        </Route>
        {/* <Redirect to="/auth" /> */}
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
    <Router>
    <MainHeader/>
      {routes}
    </Router>
    </AuthContext.Provider>
    
  );
}

export default App;
