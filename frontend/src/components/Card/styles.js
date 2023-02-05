import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  height: 51.2rem;

  margin: 0 auto; //Tirar depois

  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: .8rem;
  
  @media (max-width: 1000px) {
    width: 30rem;
    height: 41rem;

    width: 25rem;
  }
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

    padding: 3rem 2rem ;
    

    .detailsBtn {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.6rem;
      background-color: transparent;
      border: none;

      img {
        width: 17.6rem;
        height: 17.6rem;
        object-fit: cover;
    
    }

    .productTitle {
      font-size: 2.2rem;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
  }

.product:hover{
  transform: scale(1.1);
}

.productDescription {
  width: 22rem;
  height: 4.4rem;
  text-align: center;

  font-size: 1.4rem;
  color: ${({theme}) => theme.COLORS.GRAY_800};
}

.productPrice {
  font-size: 3.2rem;
  color: ${({theme}) => theme.COLORS.BLUE_100};
}


  @media (max-width: 1000px) {

    .product{
      padding: 1.5rem 1rem;
    }
    
    .fav {
      font-size: 2.6rem;
    }

    .detailsBtn {
      > img {
        max-width: 15rem;
        max-height: 15rem;
      }

      .productTitle {
        width: 25rem;
      }
    }

    .productPrice{
      font-size: 2.8rem;
    }
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