import styled from "styled-components";

export const Container = styled.div` 

`;

export const Content = styled.div`
  max-width: 120rem;
  width: 100%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .textBtn {
    display: flex;
    align-items: center;
    margin: 2.4rem 0 0 0;
    font-size: 2.4rem;
 }

  .title {
    margin: 2.4rem 0 3.2rem 0;
 }

 @media (max-width: 1000px) {
  max-width: 50rem;
  align-items: center;
  padding: 3.2rem;

  
  header {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 2rem;

    .textBtn {
      font-size: 1.7rem;

      svg {
        height: 1.7rem; 
        width: 1.7rem;
      }
    }
   }
 }
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
  margin-bottom: 10rem;

  max-width: 100%;

  .inputWrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 3.2rem;
  }
  
  .input {
   border: none;
   background-color: ${({theme}) => theme.COLORS.BLACK_900};
   color: ${({theme}) => theme.COLORS.WHITE};
  }

  .imageBox {
   #file {
     display: flex;
     flex-direction: column;
     gap: 1.6rem;

     color: ${({theme}) => theme.COLORS.GRAY_800};


     div {
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 1rem;

       border-radius: 0.5rem;
       height: 4.8rem;
       width: 22.9rem;

       color: ${({theme}) => theme.COLORS.WHITE};
       background-color: ${({theme}) => theme.COLORS.BLACK_900};

     }
   }

   input[type="file"] {
     display: none;
   }
 }

  .titleBox {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    width: 46rem;

    > p {
      color: ${({theme}) => theme.COLORS.GRAY_800};
    }
  }

  .categoryBox {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    width: 36rem;

    > p {
      color: ${({theme}) => theme.COLORS.GRAY_800};
    }
  }

  .priceBox {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    width: 25rem;

    > p {
      color: ${({theme}) => theme.COLORS.GRAY_800};
    }
  }

  .textArea {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1.6rem;

    width: 100%;

    > p {
      color: ${({theme}) => theme.COLORS.GRAY_800};
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: right;
    gap: 3.2rem;
  }

  .deleteBtn{
    background-color: ${({theme}) => theme.COLORS.BLACK_900};
  }

  @media (max-width: 1000px) {
    .inputWrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      width: 100%;
      padding: 2rem;
    }

    .imageBox {
      width: 100%;

      #file{
        > div {
          width: 100%;
        }
      }
    } 
    
    .titleBox {
      width: 100%;
    }

    .categoryBox {
      width: 100%;
    }

    .priceBox {
      width: 100%;
    }

    .textArea{
      padding: 2rem;
    }

    .buttons {
      display: flex;
      padding: 2rem;
    }

 }
  
`;

export const IngredientsSection = styled.div`
display: flex;
flex-direction: column;
gap: 1.6rem;

> span {
    color: ${({theme}) => theme.COLORS.GRAY_800};
  }

.ingredientsBox {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-content: flex-start;
    
    gap: 1.6rem;

    height: max-content;
    width: 83.7rem;
    padding: .8rem;

    border-radius: .8rem;
    
    background-color: ${({theme}) => theme.COLORS.BLACK_900};
  }

  @media (max-width: 1000px) {
    width: 100%;

    .ingredientsBox {
      width: 100%;

      display: grid;
      grid-template-columns: auto auto;
    }
  }
`;
