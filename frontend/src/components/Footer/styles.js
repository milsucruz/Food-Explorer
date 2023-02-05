import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 7.7rem;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.34rem 12.3rem;

  @media (max-width: 1000px) {
    padding: 2.34rem 5rem;

    > p {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    padding: 2.34rem 2rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;

  > h1 {
    font-size: 2.4rem;
    color: ${({theme}) => theme.COLORS.GRAY_900}
  }

  @media (max-width: 1000px) {
    > h1 {
      font-size: 1.5rem;
    }

    > img {
      height: 1.8rem;
      width: 1.8rem;
    }
  }
`;
