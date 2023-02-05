import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({theme}) => theme.COLORS.RED};
  color: ${({theme}) => theme.COLORS.WHITE};
  
  width: 100%;
  height: 4.8rem;
  padding: 1.2rem 3.2rem;
  gap: 0.8rem;
  
  border: none;
  border-radius: 0.5rem;
  
  font-weight: 500;
`;