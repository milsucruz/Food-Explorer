import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.GRAY_700};
  color: ${({theme}) => theme.COLORS.WHITE};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_700}` : "none"};

  border-radius: .8rem;
  padding-right: 1.6rem;
  
  > button {
    border: none;
    background: none;
    display: flex;
  }

  .button-delete {
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  .button-add {
    color: ${({theme}) => theme.COLORS.GRAY_800};
  }

  > input {
    height: 3.2rem;
    max-width: 10rem;
    
    padding: 1.2rem;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({theme, isNew}) => isNew ? theme.COLORS.GRAY_800 : theme.COLORS.WHITE};
    }
  }
`;