import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 140px;
  display: flex;
  aligin-items: center;
  justify-content: space-between;

  .me {
    font-family: var(--poppins);
    font-weight: var(--medium-weight);
    font-size: var(--presentation-size);
    line-height: 70px;
    display: flex;
    align-items: center;
    letter-spacing: -1px;
    color: var(--presentation-color);
    width: 50%;
  }

  .me-profile-photo {
    width: 349px;
    height: 349px;
    border: 5px solid;
    border-radius: 50%;
    border: 8px solid transparent;
    background: linear-gradient(45deg,blue,purple) border-box;
  }

  @media (max-width: 770px) {
    flex-direction: column-reverse;
    align-items: center;

    .me {
      margin-top: 80px;
      width: 90%;
    }

    .me-profile-photo {
      width: 60%;
      height: 60%;
    }
  }

  @media (max-width: 450px) {
    .me {
      font-size: 40px;
      line-height: 50px;
    }
  }
`;
