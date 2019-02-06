import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => (
    <>
        <ul id="list">
            <Link to="/"><li className="nav-item">About Me</li></Link>
            <Link to="/skills"><li className="nav-item">Skills</li></Link>
            <Link to="/portfolio"><li className="nav-item">Portfolio</li></Link>
            <Link to="/contact"><li className="nav-item">Contact</li></Link>
        </ul>
    </>
);

export default NavBar;