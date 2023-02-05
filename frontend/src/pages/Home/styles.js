import styled from "styled-components";

export const Container = styled.div`
 
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  @media (max-width: 1000px) {
    max-width: 50rem;
    margin: 0 auto;

    padding: 1.5rem;
  }
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

  @keyframes topdown {
  0% {
    opacity: 0;
    transform: translateY(-25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

animation: topdown 600ms;

  > img {
    position: relative;
    bottom: 6.4rem;
    right: 7rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
    height: 18rem;

    margin: 3rem 0 6.4rem 0;

    > img {
      width: 25rem;
      height: 23rem;
      bottom: 1.7rem;
      right: 3rem;
    }
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

  @media (max-width: 1000px) {
    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 1.4rem;
    }

    p {
      font-size: .8rem;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  
  margin-bottom: 8rem;

  width: 150rem;

  @keyframes topdown {
  0% {
    opacity: 0;
    transform: translateY(-25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

animation: topdown 600ms;

  @media (max-width: 1000px) {
    max-width: 50rem;
    gap: 1rem;
  }
`;