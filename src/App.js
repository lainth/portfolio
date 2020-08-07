import React from "react";

import Container from "react-bootstrap/Container";
import MobileNav from "./components/MobileNav";
import NavBar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Techno from "./components/Techno";
import Footer from "./components/Footer";
import MediaQuery from "react-responsive";
import $ from "jquery";
import AOS from "aos";
import "./App.scss";

// Reset the view to the top at each browser refresh
$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});

class App extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }

  render() {
    return (
      <Container fluid>
        <MediaQuery query="(max-width: 992px)">
          <MobileNav />
        </MediaQuery>
        <MediaQuery query="(min-width: 992px)">
          <NavBar />
        </MediaQuery>
        <AboutMe />
        <Presentation />
        <Projects />
        <Techno />
        <Footer />
      </Container>
    );
  }
}

export default App;
