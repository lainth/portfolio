import React from 'react';

import Container from 'react-bootstrap/Container';

import NavBar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Techno from './components/Techno';
import Footer from './components/Footer';

import './App.scss';

const App = () => {
  return (
    <Container fluid>
      <NavBar />
      <AboutMe />
      <Presentation />
      <Projects />
      <Techno />
      <Footer />
    </Container>
  );
}

export default App;
