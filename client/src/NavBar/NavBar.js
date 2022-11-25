import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.scss'


function NavBar({ onLogout }) {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <div className="nav-bar">
      <div className='Logo'>
        Outing
      </div>
      <nav className='item'>
        <ul className='ul'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/options'>options</Link>
          </li>
          <li>
            <Link to='/' onClick={handleLogout}>logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default NavBar
