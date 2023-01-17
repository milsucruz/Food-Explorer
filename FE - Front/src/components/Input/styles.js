import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  border-radius: 5px;
  
  background-color: transparent;
  color: ${({theme}) => theme.COLORS.GRAY_900};
  
  > input {
    width: 100%;
    height: 4.8rem;
    
    padding: 1.4rem 1.6rem;
    
    background-color: transparent;
    color: ${({theme}) => theme.COLORS.WHITE};
    
    border: 1px solid ${({theme}) => theme.COLORS.WHITE};
    border-radius: .5rem;

    &:placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_900};
    }

  }
  
  > svg {
    margin-left: 1.6rem;
  }
`;