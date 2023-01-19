import styled from "styled-components";

export const Container = styled.div`

 .textBtn {
   display: flex;
   align-items: center;

   margin: 2.4rem 0 4rem 15.4rem;

   font-size: 2.4rem;
 }
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 4.1rem;

margin: 4.1rem 0 10rem 0 ;

.meal img {
  width: 38.947rem;
  height: 38.947rem;
  object-fit: cover;
}
`;

export const Main = styled.div`
  width: 60rem;

  .infos {
    display: flex;
    flex-direction: column;
    gap: .8rem;

    text-align: start;
    margin-bottom: 2.6rem;

    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  .infos h1{
    font-size: 4rem;
  }

  .infos h2{
    font-size: 2.4rem;
    font-weight: 400;
  }
`;

export const Ingredients = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.6rem;
  
  height: 9.8rem;

  margin-bottom: 4.4rem;

  .ingredientSection{
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: .8rem;

    > img {
    max-height: 9.8rem;
    object-fit: cover;
  }
  }
`;

export const PurchaseSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  > h1 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
  }

  .productQuantity{
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }

  .includeBtn {
    display: flex;
    align-items: center;
    font-size: 1.4rem;

    margin-left: 2.4rem;
  }
`;