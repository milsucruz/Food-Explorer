import styled from "styled-components";

export const Container = styled.div`
 
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 140rem;
  height: 26rem;

  margin: 16.4rem 0 6.4rem 0;

  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: .8rem;

  > img {
    position: relative;
    bottom: 6.4rem;
    right: 7rem;
  }

`;

export const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  width: 100%;
  
  > h1 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 4rem;
  }

  > p {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 1.6rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  
  margin-bottom: 8rem;

  width: 150rem;
`;