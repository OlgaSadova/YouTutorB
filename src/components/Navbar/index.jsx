import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
  {/* <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div> */}

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <Link className="navbar-item" to ='/'>Home</Link>
      {/* <Link to ='/'>Home</Link> */}
      {/* </a> */}

      <a className="navbar-item">
        About
      </a>

      {/* <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div> */}

    </div>

     <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link className="button is-primary" to ='/signup'>
          
              <strong>Sign up</strong>
          
            
          </Link>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div> 
  </div>
</nav>
    )
}
