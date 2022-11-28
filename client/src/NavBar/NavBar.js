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
      <Link to='/'>Outing</Link>
      </div>
      <nav className='item'>
        <ul className='ul'>
          <li>
            <Link to='/Options'>options</Link>
          </li>
          <li>
            <Link to='/Account-Update'>Account</Link>
          </li>
          <li>
            <Link to='/Profile'>Profile</Link>
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
