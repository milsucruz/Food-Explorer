import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  height: 51.2rem;

  margin: 0 auto; //Tirar depois

  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: .8rem;
`;

export const Content = styled.div`
width: 100%;
height: 100%;
gap:.8rem;

position: relative;

.fav{
  background: transparent;
  border: none;
  font-size: 3.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE};

  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
 
}

.product{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    padding: 5.6rem 2rem;

    > img {
      width: 17.6rem;
      height: 17.6rem;
      object-fit: cover;
    }
  }

  .productTitle {
      font-size: 2.4rem;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

  .productDescription {
      width: 22rem;
      text-align: center;

      font-size: 1.4rem;
      color: ${({theme}) => theme.COLORS.GRAY_800};
    }

  .productPrice {
      font-size: 3.2rem;
      color: ${({theme}) => theme.COLORS.BLUE_100};
    }

`;

export const PurchaseSection = styled.div`
  display: flex;
    gap: 1.6rem;


  .productQuantity{
    display: flex;
    align-items: center;
    gap: 1.4rem;

  }
`;