// import React, { useState } from 'react';
// import './Nav.css'; // Import the CSS file for styling

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={`navbar ${isOpen ? 'open' : ''}`}>
//       <div className="navbar-container">
//         <div className="logo">Logo</div>
//         <ul className="nav-links">
//           <li><a href="/#">Home</a></li>
//           <li><a href="/#">About</a></li>
//           <li><a href="/#">Services</a></li>
//           <li><a href="/#">Contact</a></li>
//         </ul>
//         <div className="menu-toggle" onClick={handleToggle}>
//           <div className="hamburger"></div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import './Nav.css'; // Import the CSS file for styling
import {BsSearch} from 'react-icons/bs'

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleHover = () => {
    setIsExpanded(true);
  };

  const handleLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div className={`search-bar ${isExpanded ? 'expanded' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <input type="text" placeholder="Search" />
      <button>
        <BsSearch className='icon'/>
      </button>
    </div>
  );
};

export default SearchBar;
