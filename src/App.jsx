/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";


 
const siteProps = {
  name: "Adeel Munir",
  title: "Machine Learning Enthusiast",
  email: "adeelmodernite@gmail.com",
  gitHub: "Adeelmunir707",
  instagram: "itz._.aadie?igshid=NzZlODBkYWE4Ng==",
  linkedIn: "adeelmunir/",
  medium: "/",
  twitter: "/",
  youTube: "/",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
