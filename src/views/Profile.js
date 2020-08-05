import React, { useState, useEffect, useContext } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Loading } from '../components';
import { UserContext } from '../context/user';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);
  const { authToken } = useContext(UserContext);

  useEffect(() => {
    // getUserData();
    const getValues = async () => {
      setLoadingUser(true);

      const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
      const response = await fetch(`https://${DOMAIN}/userinfo`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      });
      const userData = await response.json();
      setUser(userData);
      setLoadingUser(false);
    };
    getValues();
  }, [authToken]);

  if (loadingUser || !authToken || !user) {
    return <Loading />;
  }

  return (
    <Container className='mb-5'>
      <h1 className='mb-5'>User Profile Page</h1>
      <Row className='align-items-center profile-header mb-5 text-center text-md-left'>
        <Col md={2}>
          <img
            src={user.picture}
            alt='Profile'
            className='rounded-circle img-fluid profile-picture mb-3 mb-md-0'
          />
        </Col>
        <Col md>
          <p>
            <strong className='lead text-muted'>Name: </strong>
            {user.name}
          </p>
          <p>
            <strong className='lead text-muted'>Email: </strong>
            {user.email}
          </p>
          <p>
            <strong className='lead text-muted'>Nickname: </strong>
            {user.nickname}
          </p>
          <p>
            <strong className='lead text-muted'>Email Verified: </strong> {user.email_verified ? 'YES' : 'NO'}
          </p>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Profile;
