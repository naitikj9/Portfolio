import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faProjectDiagram, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function Navbar() {
  const handleResumeClick = () => {
    window.open('https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1', '_blank');
  };

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="home" smooth={true} duration={500}>
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="Projects" smooth={true} duration={500}>
            <FontAwesomeIcon icon={faProjectDiagram} /> Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" smooth={true} duration={500}>
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" onClick={handleResumeClick}>
            <FontAwesomeIcon icon={faFileAlt} /> Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
