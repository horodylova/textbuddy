import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: var(--spacing-lg);
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`;

export const AppHeader = styled.h1`
  color: var(--primary-color);
  text-align: center;
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-lg);
  }
`;