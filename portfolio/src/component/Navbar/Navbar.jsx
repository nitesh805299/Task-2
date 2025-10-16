// import React, { useState, useEffect } from 'react';
// import '../Navbar/Navbar.css';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//       <h1 className="nk-logo">NK</h1>

//       <ul className='nav-menu'> 
//         <li><a href="#Home">Home</a></li>
//         <li><a href="#About">About Me</a></li>
//         <li><a href="#Services">Services</a></li> 
//         <li><a href="#Project">Project</a></li>
//         <li><a href="#contect">Contect</a></li>
//       </ul>

//       <button className="nav-connect">Connect with me</button>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import '../Navbar/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle menu for mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking on a link (optional)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <h1 className="nk-logo">NK</h1>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li><a href="#Home" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#About" onClick={handleLinkClick}>About Me</a></li>
        <li><a href="#Services" onClick={handleLinkClick}>Services</a></li>
        <li><a href="#Project" onClick={handleLinkClick}>Project</a></li>
        <li><a href="#Contact" onClick={handleLinkClick}>Contact</a></li>
        <button className="nav-connect" onClick={handleLinkClick}>
          Connect with me
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;







