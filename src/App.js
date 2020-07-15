import React from 'react';

import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import AboutMe from './components/AboutMe';

import './App.scss';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <AboutMe />
    </Container>
  );
}

export default App;
