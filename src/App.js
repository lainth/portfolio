import React from 'react';

import Container from 'react-bootstrap/Container';
import ScrollUp from './components/ScrollUp';
import NavBar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Techno from './components/Techno';
import Footer from './components/Footer';
import MediaQuery from 'react-responsive';
import $ from 'jquery';

import './App.scss';


// Reset the view to the top at each browser refresh
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

const App = () => {
  return (
    <Container fluid>
      <MediaQuery query="(min-width: 992px)">
        <NavBar />
      </MediaQuery>
      <AboutMe />
      <Presentation />
      <Projects />
      <Techno />
      <Footer />
      <ScrollUp />
    </Container>
  );
}

export default App;
