import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    text-align: center;
    font-size: var(--stack-size);
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media (max-width: 719px) {
    .projects {
      justify-content: center;
    }
  }
`;
