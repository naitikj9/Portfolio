import React from 'react';
import styled from 'styled-components';
import profileImage from './Profileimage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';

// Typewriter component
const TypewriterComponent = () => (
  <Typewriter
    options={{
      strings: ['Student', 'Software Developer', 'Open Source Contributor' , 'FreeLancer'],
      autoStart: true,
      loop: true,
      typingSpeed: 75,
      deleteSpeed: 50,
      delay: 25,
    }}
  />
);



// Main Component
const Component = () => {
  return (
    <Container>
      <LeftSection>
        <Greet>Hi, there I'm<br /></Greet>
        <Name>Naitik Jain</Name>
        <Subtitle>
          <TypewriterComponent />
        </Subtitle>
      </LeftSection>
      <RightSection>
        <ProfileImage src={profileImage} alt="Profile" />
        <IconWrapper>
          <Icon href="https://linkedin.com/in/naitik-jain-26a577213" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </Icon>
          <Icon href="https://github.com/naitikj9" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </Icon>
          <Icon href="mailto:naitikjain921@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </Icon>
        </IconWrapper>
      </RightSection>
    </Container>
  );
};
// Styled-components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #121212;
  color: #fff;
  height: 100vh;
  box-sizing: border-box;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled.h1`
  font-size: 5rem;
  margin: 0;
  color: #bb86fc;
  white-space: nowrap;
  overflow: hidden;
`;

const Subtitle = styled.div`
  font-size: 2rem;
  color: #999;
  margin-top: 5px;
  font-style: italic;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 4px solid #bb86fc;
  object-fit: cover;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Icon = styled.a`
  width: 50px;
  height: 50px;
  background-color: #4285f4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin: 0 10px;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.2);
    background-color: #005cbf;
  }
`;

const Greet = styled.h1`
  font-size: 2rem;
  white-space: pre-wrap;
  word-break: break-all;
  margin: 0;
  color: #03dac6;
`;

export default Component;
