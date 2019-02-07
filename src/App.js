import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./css/style.css";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app-container">
          <div className="banner">
            <h1>DownThematrix</h1>
          </div>
          <nav id="navbar">
            <ul className="navlist">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
          </nav>

            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/posts" component={Articles} />
              <Route path="/contact" component={Contact} />
            </div>
            {/* Footer */}
            <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
