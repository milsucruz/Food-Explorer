import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.BLACK_800};
  color: ${({theme}) => theme.COLORS.WHITE};

  border-radius: .5rem;
  height: 3.2rem;
  
  > span {
    padding: 1.6rem;
  }
`;
