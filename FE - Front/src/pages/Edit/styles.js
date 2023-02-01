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
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
  margin-bottom: 10rem;

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
   max-width: 23rem;

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
    margin-left: 66rem;

    display: flex;
    align-items: center;
    gap: 3.2rem;

  }

  .deleteBtn{
    background-color: ${({theme}) => theme.COLORS.BLACK_900};
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
    display: flex;
    align-items: center;
    gap: 1.6rem;
    
    height: 4.8rem;
    width: 83.7rem;
    padding: .8rem;

    border-radius: .8rem;
    
    background-color: ${({theme}) => theme.COLORS.BLACK_900};
  }

  
  
`;
