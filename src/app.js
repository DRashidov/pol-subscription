import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { NavBar, Footer } from './components';
import { Home, Profile } from './views';
import { UserContext } from './context/user';

import './app.css';

const App = () => {
  const [authTokens, setAuthTokens] = useState('');

  return (
    <UserContext.Provider value={{ authTokens, setAuthTokens }}>
    <div id='app' className='d-flex flex-column h-100'>
      <NavBar />
      <Container className='flex-grow-1 mt-5'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/external-api' component={Profile} />
        </Switch>
      </Container>
      <Footer />
    </div>
    </UserContext.Provider>
  );
};

export default App;
