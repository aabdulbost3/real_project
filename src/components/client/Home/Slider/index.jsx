import Slider from "react-slick";
import { GalWrapper, SliderItem  } from "./styled-index";
import img from "../../../../assets/client/imgBack.jpg"
import "./slider.css"

function Slder() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay : true,
  };

  return (
    <>
      <GalWrapper>
        <Slider {...settings}>
          <SliderItem>
            <h3 data-aos="zoom-out-up">Lorem ipsum dolor sit amet.</h3>
            <img src={img} alt="" />
          </SliderItem>
          <SliderItem>
          <h3>Lorem ipsum dolor sit amet.</h3>
            <img src="https://picsum.photos/700" alt="" />
          </SliderItem>
          <SliderItem>
          <h3>Lorem ipsum dolor sit amet.</h3>
            <img src="https://picsum.photos/700" alt="" />
          </SliderItem>
        </Slider>
      </GalWrapper>
    </>
  );
}


export default Slder;