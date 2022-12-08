import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.scss'


function NavBar({ setUser}) {

  function onLogout() {
    setUser('');
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
      <header>
          <nav className="nav_checkbox">
            <Link to="/" className="logo">
              <h2>Outing</h2>
            </Link>
            <label htmlFor="tab-nav" className="label">
              <div className="line"></div>
            </label>
            <ul className="content_nav">
              <li><Link to="/Options">OPTIONS</Link></li>
              <li><Link to="/Profile">PROFILE</Link></li>
              <li><Link to="/" onClick={handleLogout}>LOGOUT</Link></li>
            </ul>
          </nav>
      </header>
  )
}
export default NavBar