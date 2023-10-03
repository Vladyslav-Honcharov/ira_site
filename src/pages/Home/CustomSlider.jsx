import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss";
import "font-awesome/css/font-awesome.min.css";

const slidesData = [
  {
    image: "https://picsum.photos/200/300?random=1",
    title: "Slide 1",
    text: "This is slide 1",
  },
  {
    image: "https://picsum.photos/200/300?random=2",
    title: "Slide 2",
    text: "This is slide 2",
  },
  {
    image: "https://picsum.photos/200/300?random=3",
    title: "Slide 3",
    text: "This is slide 3",
  },
];

function CustomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 30000, // 30 seconds
  };

  return (
    <div className="custom-slider">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.title} />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              <button>Кнопка</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomSlider;
