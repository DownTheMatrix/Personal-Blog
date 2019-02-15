import React, { Component } from 'react';
import { Route, HashRouter } from "react-router-dom";
import "./css/style.css";
import Banner from "./components/Banner";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app-container">
            <Banner />
            <Navigation />
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/posts" component={Articles} />
              <Route path="/contact" component={Contact} />
            </div>
            <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
