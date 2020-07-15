import React from 'react';

import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Presentation from './components/Presentation';
import Projects from './components/Projects';

import './App.scss';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <AboutMe />
      <Presentation />
      <Projects />
    </Container>
  );
}

export default App;
