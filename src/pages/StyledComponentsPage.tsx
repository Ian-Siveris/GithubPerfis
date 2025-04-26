import React from 'react';
import ProfileCardStyled from '../components/GithubPerfis';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  min-height: 100vh;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 20px; 
`;

function StyledComponentsPage() {
  return (
    <PageContainer>
      <Title>Meu Perfil com Styled-Components</Title>
      <ProfileCardStyled user={null} /> 
    </PageContainer>
  );
}

export default StyledComponentsPage;