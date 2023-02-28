import styled from 'styled-components';

export const Container = styled.div`
  color: var(--light-content);

  .body {
    padding: var(--padding-master);
  }

  @media (max-width: 1030px) {
    .body {
      padding: var(--padding-mobile-first-stage);
    }
  }

  @media (max-width: 1030px) {
    .body {
      padding: var(--padding-mobile-second-stage);
    }
  }
`;
