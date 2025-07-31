// DropdownMenu.js
import React from 'react';
import './DropdownMenu.css'

const DropdownMenu = ({ setShowLogin, setShowRegister }) => {
  return (
    <div className="dropdown-menu">
      <button className='button login' onClick={() => { setShowLogin(true); setShowRegister(false) }}>Login</button>
      <button className='button register' onClick={() => { setShowRegister(true); setShowLogin(false) }}>Register</button>
    </div>
  );
};

export default DropdownMenu;
