import React from 'react';
import styled from 'styled-components';
import profileImage from './Profileimage.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faStar, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const ProfileImageContainer = styled.div`
  margin-bottom: 2rem;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #0077b6;
`;

const ConnectSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  display: inline-block;
  margin: 0 0.5rem;
  color: #0077b6;
  font-size: 1.5rem;
`;

const AboutMePage = () => {
  return (
    <Container>
      <Title>ABOUT ME</Title>
      <Description>I am a Scaler student who has completed 3 trimesters.</Description>
      <Description>I'm a web developer who loves solving problems and building websites.</Description>
      <Description>I am passionate about technologies and love to learn new things.</Description>
      <Description>I am more interested in building new web technologies and products.</Description>
      <Description>
        I always apply my experience in developing products with Node.js and modern JavaScript libraries and frameworks like
        React.js.
      </Description>
      <Description>Currently expanding my portfolio by building more projects that I can add here.</Description>
      <ProfileImageContainer>
        <ProfileImage src={profileImage} alt="Profile" />
      </ProfileImageContainer>
      <ConnectSection>
        <SocialIcon href="https://www.linkedin.com/in/naitik-jain-26a577213" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialIcon>
        <SocialIcon href="#">
          <FontAwesomeIcon icon={faStar} />
        </SocialIcon>
        <SocialIcon href="#">
          <FontAwesomeIcon icon={faEnvelope} />
        </SocialIcon>
      </ConnectSection>
    </Container>
  );
};

export default AboutMePage;