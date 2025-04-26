import React from 'react';
import ProfileCardTailwind from '../components/ProfileCardTailwind';
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

function TailwindCSSPage() {
  return (
    <PageContainer>
      <Title>Meu Perfil com Tailwind CSS</Title>
      <ProfileCardTailwind user={null} /> 
    </PageContainer>
  );
}

export default TailwindCSSPage;