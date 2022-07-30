import React from 'react';
import './App.css'
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <nav className='NavBar'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            
          </ul>
        </nav>
  )
}

export default Nav