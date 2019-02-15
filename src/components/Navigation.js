import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav id="navbar">
            <ul className="navlist">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;