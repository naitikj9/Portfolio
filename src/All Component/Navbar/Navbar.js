import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faProjectDiagram, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function Navbar() {
  const resumeUrl = "https://drive.google.com/drive/home";

  const openResume = () => {
    window.open(resumeUrl, "_blank");
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
          <a href={resumeUrl} onClick={openResume} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFileAlt} /> Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
