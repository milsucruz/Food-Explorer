import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.BLACK_800};
  color: ${({theme}) => theme.COLORS.WHITE};

  border-radius: .5rem;
  padding: .4rem .8rem;

  max-width: 10rem;
  width: 80%;
  height: 3.2rem;
  
`;

export const Card = styled.div`

`;