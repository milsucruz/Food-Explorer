import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20rem;

  .logo{
    display: flex;
    gap: 2rem;
  }

  h1{
    font-size: 4.25rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 15px;
    gap: .5rem;
  }
`;


export const Form = styled.form`
  width: 47.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;

  padding: 6.4rem;
  border-radius: 1.6rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  > h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inputs {
    > p{
      margin-bottom: .8rem;

    color: ${({theme}) => theme.COLORS.GRAY_800}
    }
  }

  .textBtn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1000px) {
    > h1 {
      display: none;
    }

    background-color: transparent;
    gap: 3.2rem;
  }
`;