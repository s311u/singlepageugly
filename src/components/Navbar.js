import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return(
    <header class="c-header">
      <nav class="navbar navbar-default">
        <div class="container">
                    <ul>
                      <li class="nav-item">
                      <Link className="nav-Link" to="/">Home</Link>
                      </li>
                      <li class="nav-item">
                      <Link className="nav-Link" to="/about">about us</Link>
                      </li>
                      <li class="nav-item">
                      <Link className="nav-Link" to="/contactus">contact us</Link>
                      </li>
                    </ul>
        </div>
      </nav>
    </header>

 )
}

