import styled from "styled-components";

export const Container = styled.div`

  .textBtn {
   display: flex;
   align-items: center;

   margin: 2.4rem 0 4rem 15.4rem;

   font-size: 2.4rem;
 }

  @media (max-width: 1000px){
    width: 100%;

    .textBtn{
      width: 100%;
      margin:  2.4rem 0 4rem 3rem;
    }
  }
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 8rem;

margin: 10rem 0 18rem 0 ;

.meal img {
  width: 38.947rem;
  height: 38.947rem;
  object-fit: cover;
}

@media (max-width: 1000px) {
    flex-direction: column;

    .meal img {
      width: 26.4rem;
      height: 26.4rem;
      object-fit: cover;
    }
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

  @media (max-width: 1000px) {

    display: flex;
    flex-direction: column;

    width: 31.6rem;

  .infos {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    gap: 2.4rem;

    margin-bottom: 2.6rem;

    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  .infos h1{
    font-size: 2.7rem;
  }

  .infos h2{
    font-size: 1.6rem;
  }
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
  }

  @media (max-width: 1000px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    align-content: center;
  }
`;

export const PurchaseSection = styled.div`
  display: flex;
  align-items: center;

  .productQuantity{
    display: flex;
    align-items: center;
    gap: 3.3rem;
  }

  .editBtn {
    display: flex;
    align-items: center;
    font-size: 1.4rem;

    width: 15rem;
  }

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .includeBtn {
      width: 15rem;
      font-size: 1rem;
    }

    .editBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;

      width: 100%;
    }
  }
`;