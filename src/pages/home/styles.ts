import styled from 'styled-components';

export const Container = styled.div`
  color: var(--light-content);
  padding: var(--padding-master);

  @media (max-width: 1030px) {
    padding: var(--padding-mobile-first-stage);
  }

  @media (max-width: 1030px) {
    padding: var(--padding-mobile-second-stage);
  }
`;
