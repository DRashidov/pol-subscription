import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { NavBar, Footer } from './components';
import { Home, Profile } from './views';
import UserProvider from './context/user';

import './app.css';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <UserProvider>
      <div id='app' className='d-flex flex-column h-100'>
        <NavBar />
        <Container className='flex-grow-1 mt-5'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/login' component={LoginForm} />
            <Route path='/external-api' component={Profile} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </UserProvider>
  );
};

export default App;
