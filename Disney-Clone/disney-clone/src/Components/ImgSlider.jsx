import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slider1 from "../../src/Images/slider-badging.jpg"
import Slider2 from "../../src/Images/slider-scale.jpg"
import Slider3 from "../../src/Images/slider-badag.jpg"
import Slider4 from "../../src/Images/slider-scales.jpg"

const ImgSlider = () => {
  const SliderImages = [
    { image: Slider1, alt: "first image" },
    { image: Slider2, alt: "second image" },
    { image: Slider3, alt: "third image" },
    { image: Slider4, alt: "fourth Image" }
  ]

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      {SliderImages.map((slider, index) => (
        <Wrap key={index}>
          <a>
            <img src={slider.image} alt={slider.alt} />
          </a>
        </Wrap>
      ))}
    </Carousel>
  );
};


const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 3px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;