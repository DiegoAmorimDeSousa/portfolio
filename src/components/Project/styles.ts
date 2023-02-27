import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  font-family: 'Poppins';
  height: 460px;
  background: #363636;
  box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin: 60px 10px;

  img {
    width: 100%;
    border-radius: 20px 20px 0 0;
    height: 140px;
    object-fit: cover;
  }

  .title-project {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    font-size: 23px;
    line-height: 26px;
    margin: 20px 0;
  }

  .status div {
    display: flex;
    align-items: center;
    font-size: 12px;
  }

  .status div svg {
    margin-right: 5px;
  }

  .description-project {
    padding: 0 30px;
    font-size: 14px;
    line-height: 26px;
    min-height: 145px;
  }

  .stacks-project {
    padding: 0 30px;
    margin-top: 20px;
  }

  .stacks-project img {
    width: 20px;
    height: 20px;
    margin: 0 5px;
    border-radius: 0;
  }

  .links {
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
  }

  .links svg {
    margin-right: 5px;
    color: var(--absolute-white);
  }

  .project-link, .github-link {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .project-link a, .github-link a {
    color: var(--absolute-white);
  }

  .github-link a {
    margin-right: 8px;
  }

  .title-project, 
  .status div,
  .status div svg,
  .description-project,
  .stacks-project,
  .stacks-project img,
  .links,
  .links svg,
  .project-link, 
  .github-link,
  .project-link a, 
  .github-link a {
    background: var(--background-project);
  }

  @media (max-width: 719px) {
    width: 90%;
    padding-bottom: 21px;
    height: 100%;
  }
`;
