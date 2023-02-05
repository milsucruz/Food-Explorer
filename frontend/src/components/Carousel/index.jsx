import { Card } from "../Card"
import { useRef } from "react";
import { Container, Slider } from "./styles";
import {AiOutlineRight, AiOutlineLeft} from "react-icons/ai"

export function Carousel({ title, children }) {

  const slider = useRef(null);

  function handleLeftBtn(e) {
    e.preventDefault();
    slider.current.scrollLeft -= slider.current.offsetWidth;
  }
  function handleRightBtn(e) {
    e.preventDefault();
    slider.current.scrollLeft += slider.current.offsetWidth;
  }

  return(
    <Container>
      <h2> {title} </h2>

        <Slider>
          <button className="leftBtn" onClick={handleLeftBtn} >
            <AiOutlineLeft size={40} />
          </button>

          <div className="productMenu" ref={slider} > 
            {children}
          </div>

          <button className="rightBtn"  onClick={handleRightBtn} >
            <AiOutlineRight size={40} />
          </button>
        </Slider>
    </Container>
  )
}