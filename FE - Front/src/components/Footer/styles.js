import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 7.7rem;
  padding: 2.34rem 12.3rem;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;

  > h1 {
    color: ${({theme}) => theme.COLORS.GRAY_900}
  }
`;
