import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;
  padding: 2.8rem 12.3rem;

  .menuNavigation {
    display: flex;
    align-items: center;
    gap: 3.2rem;

    > a {
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    > svg {
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }

`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  
   h1{
    font-size: 2.51109rem;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
  
  a{
    display: flex;
    gap: 1.123rem;
  }
`;


export const Search = styled.div`
  width: 100%;
  align-self: center;
  border-radius: 5px;
  width: 41rem;
  height: 4.8rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600}; //
  
  label {
    display: flex;
    align-items: center;
    padding-left: 1.6rem;
  }

  input{
    padding: 1.6rem;
    width: 100%;
    border: none;
    background: transparent;
    color: ${({theme}) => theme.COLORS.GRAY_900};
  }

  svg {
        color: ${({ theme }) => theme.COLORS.GRAY_900};
    }

`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 21rem;
  height: 5.6rem;
  padding: 1.2rem 3.2rem;
  gap: .8rem;

  border-radius: 5px;
  background-color: ${({theme}) => theme.COLORS.RED};

  > p {
    color: ${({theme}) => theme.COLORS.WHITE};
    font-weight: 500;
    font-size: 1.4rem;
  }

  > svg {
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 24px;
  }
`;

export const LogOut = styled.button`
  display: flex;
  align-items: center;

  background: transparent;
  border: none;

  > svg {
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 24px;
  }
`;