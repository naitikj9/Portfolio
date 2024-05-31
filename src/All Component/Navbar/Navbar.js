import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faProjectDiagram, faFileAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <FontAwesomeIcon icon={faHome} /> Home
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faInfoCircle} /> About
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faProjectDiagram} /> Projects
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faFileAlt} /> Resume
        </li>
        <li>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;