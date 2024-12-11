import React from 'react';
import { useState } from 'react';
import { FaCog, FaBell, FaCalendarAlt,FaUserCircle,FaSearch } from 'react-icons/fa';
import '../Header/Header.css'

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <div className="main-header">
      <div style={{display:'flex'}}>
      <div className="grid-icon">
      {[...Array(9)].map((_, index) => (
        <span key={index} className="dot"></span> 
      ))}
    </div>
    <h1 className='heading'>Test</h1>
      </div>
      
      <div className="header-actions">
      <div className={`search-container ${isSearchOpen ? 'active' : ''}`}>
          <FaSearch className="search-icon" onClick={handleSearchToggle} />
          {isSearchOpen && (
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              onBlur={() => setIsSearchOpen(false)} // Closes search on blur
            />
          )}
        </div>
        <div className="icons">
          <FaCog className="icon" title="Settings" />
          <FaBell className="icon" title="Notifications" />
          <FaCalendarAlt className="icon" title="Calendar" />
          <FaUserCircle className="icon profile-icon" title="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
