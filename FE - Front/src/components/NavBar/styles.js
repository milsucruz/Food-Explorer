import styled from "styled-components";

export const Container = styled.div`
  width: 60rem;
  @media (min-width: 1000px) {
    display: none;
  }  
`;

export const Menu = styled.div `

  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  padding: 0 2rem;
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 5.6rem 2.8rem 2.4rem;

    
  .display {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;

  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 7;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    transition: 1s;
    transform: translateY(-1000vh);

    .close-menu {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      width: 100%;
      padding: 5.6rem 2.8rem 2.4rem;
      
      position: fixed;
      top: 0;
      left: 0;
      
      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      p{
        font-size: 2.4rem;
      }
  }

    .listMenu {
      padding: 15rem 2.8rem 9.1rem;

      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3.6rem;

      .textMenu{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;

        button {
          display: flex;
          align-items: flex-start;

          width: 100%;
          border: none;

          font-size: 2.4rem;

          background: transparent;

          color: ${({ theme }) => theme.COLORS.WHITE};
          border-bottom: 1px solid #192227;

          p {
            margin: .5rem 0 .5rem 0;
          }
        }
      }
    }

}
    
  .responsive_nav {
      transform: none;
    }
    
  .nav-btn {
      height: 2.4rem;
      cursor: pointer;
      background: transparent;
      border: none;
      outline: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
      visibility: hidden;
      opacity: 0;
  }

  .nav-btn{
      visibility: visible;
      opacity: 1;
    }

  @media (min-width: 1000px) {
    display: none;
  }

`;


export const Logo = styled.div`
  display: flex;
  align-items: center;
  
  h1{
   font-size: 2.51109rem;
   color: ${({theme}) => theme.COLORS.WHITE};
 }
  
  a{
    display: flex;
    align-items: center;
    gap: 1.123rem;
    text-decoration: none;

    > p {
      display: flex;
      justify-content: end;
  
      font-size: 1.2rem;
  
      color: ${({theme}) => theme.COLORS.BLUE_100};
    }
  }
`;


export const Search = styled.div`
  width: 100%;
  align-self: center;
  border-radius: .5rem;
  height: 4.8rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
  
  label {
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }

  input{
    padding: 1.6rem;
    width: 100%;
    border: none;
    background: transparent;
    color: ${({theme}) => theme.COLORS.GRAY_900};
  }

  svg {
        color: ${({ theme }) => theme.COLORS.GRAY_900};
    }

`;
