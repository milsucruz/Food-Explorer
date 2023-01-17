import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 30rem;
  `;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  
  
  .logo{
    display: flex;
    gap: 2rem;
  }

  h1{
    font-size: 4.24815rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.WHITE};
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
`;