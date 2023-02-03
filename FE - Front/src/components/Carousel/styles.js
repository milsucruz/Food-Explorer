import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 4rem;
  
  > h2 {
    margin: 0 0 4rem 2rem;
    font-size: 3.2rem;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  @media (max-width: 1000px) {
    padding-inline: 0;
    > h2 {
        font-size: 2.5rem;
        margin: 0 0 2rem 2rem;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`;

export const Slider = styled.div`
  position: relative;
  max-width: 100%;
  height: 51.2rem;

  .productMenu {
    display: flex;
    gap: 2.7rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .leftBtn, .rightBtn {
    position: absolute;
    z-index: 5;
    height: 51.2rem;
    width: 11.6rem;
    padding-inline: 1rem;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  .leftBtn{
    top: 0;
    left: 0;
    border: none;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
    transform: matrix(-1, 0, 0, -1, 0, 0);
    
    > svg { 
      transform: matrix(-1, 0, 0, -1, 0, 0);
    }
  }  

  .rightBtn{
    top: 0;
    right: 0;
    justify-content: flex-end;
    border: none;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  }  

  @media (max-width: 1000px) {
    .leftBtn{
      display: none;
    }

    .rightBtn{
      display: none;
    }
  }
`;