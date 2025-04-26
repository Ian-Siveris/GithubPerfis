import React from 'react';
import styled from 'styled-components';

interface User {
  avatar_url?: string;
  name?: string | null;
  login: string;
  bio?: string | null;
  public_repos?: number;
  html_url?: string;
}

const CardContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const ProfilePicture = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f0f0f0; 
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Name = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  text-align: center;
`;

const Bio = styled.p`
  color: #555;
  margin-bottom: 15px;
  text-align: center;
`;

const Repos = styled.p`
  font-size: 0.9em;
  color: #777;
  margin-bottom: 20px;
`;

const LinkButton = styled.a`
  background-color: #007bff; 
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

interface ProfileCardStyledProps {
  user: User | null;
}

function ProfileCardStyled({ user }: ProfileCardStyledProps) {
  const myProfileUrl = 'https://github.com/Ian-Siveris';

  return (
    <CardContainer>
      <ProfilePicture>
        <img src="https://avatars.githubusercontent.com/u/81689494?v=4" alt="Meu Perfil" />
      </ProfilePicture>
      <Name>Ian Siveris</Name>
      <Bio>Desenvolvedor Front-end | Apaixonado por tecnologia e aprendizado contínuo.</Bio>
      <LinkButton href={myProfileUrl} target="_blank" rel="noopener noreferrer">
        Meu Perfil
      </LinkButton>
    </CardContainer>
  );
}

export default ProfileCardStyled;