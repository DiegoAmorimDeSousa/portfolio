import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    text-align: center;
    font-size: var(--stack-size);
  }

  svg {
    font-size: 40px;
    margin-right: 10px;
  }

  .contact-icons {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-icons a {
    color: var(--light-content);
  }

  .whats {
    display: flex;
    align-items: center;
  }
`;
