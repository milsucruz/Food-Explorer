import { Container, Slider } from "./styles";
import {AiOutlineRight, AiOutlineLeft} from "react-icons/ai"

import { Card } from "../Card"

export function Carousel() {
  return(
    <Container>
      <h2>Pratos principais</h2>

        <Slider>
          <button className="leftBtn">
            <AiOutlineLeft size={40} />
          </button>

          <div className="productMenu"> <Card/></div>

          <button className="rightBtn">
            <AiOutlineRight size={40} />
          </button>
        </Slider>
    </Container>
  )
}