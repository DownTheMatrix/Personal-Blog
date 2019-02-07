import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./css/style.css";
import Home from "./Home";
import Articles from "./Articles";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <h1>Simple SPA</h1>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/articles">Articles</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/articles" component={Articles} />
              <Route path="/contact" component={Contact} />
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
