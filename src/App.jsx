import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Hamburger from "./components/Hamburger";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GitHubCalendar from "react-github-calendar";
import "./App.css";

function App() {
  return (
    <main id="app">
      <>
        <Header />
        <Hamburger />
        <Profile />
        <About />
        <Skills />
        {/* <GitHubCalendar
        username="Tolushawlar"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      /> */}
        <Projects />
        <Contact />
        <Footer />
      </>
    </main>
  );
}

export default App;
