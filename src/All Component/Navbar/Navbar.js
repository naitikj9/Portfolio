import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faProjectDiagram, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="home" smooth={true} duration={500}>
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="Project" smooth={true} duration={500}>
            <FontAwesomeIcon icon={faProjectDiagram} /> Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" smooth={true} duration={500}>
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="resume" smooth={true} duration={500}>
            <FontAwesomeIcon icon={faFileAlt} /> Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;