import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 100px 0;

  h1 {
    text-align: center;
    font-size: var(--stack-size);
  }

  .stacks {
    margin: 40px 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .dev-icon {
    width: 80px;
    heigth: 80px;
    margin: 40px;
  }

  @media (max-width: 399px) {
    .stacks {
      justify-content: center;
    }
  }
`;
