import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  slider: {
    height: "75vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    marginBottom: 30,
  },
  slide: {
    height: "100%",
    position: "relative",
  },
  slideImage: {
    height: "75vh",
    objectFit: "fill",
  },
  slideContent: {
    minWidth: "200px",
    position: "absolute",
    bottom: theme.spacing(5),
    left: theme.spacing(6),
    color: "white",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: "20px",
    padding: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 1), 0 1px 3px rgba(0, 0, 0, 1)",
  },
}));

const Slider = () => {
  const classes = useStyles();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: "/images/Slider/s1.jpg",
      text: "Швидкий онлайн запис ",
      buttonText: "Записатись",
      buttonURL: "/Appointment",
    },
    {
      image: "/images/Slider/s1test.jpg",
      text: "Приємні ціни",
      buttonText: "Ціни",
      buttonURL: "/Price",
    },
    {
      image: "/images/Slider/s2test.jpg",
      text: "Навчаю якісно робити красу",
      buttonText: "Приклади робіт",
      buttonURL: "/Portfolio",
    },
  ];

  const handlePreviousSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className={classes.slider}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={10000}
        selectedItem={activeSlide}
        onChange={setActiveSlide}
        infiniteLoop={true}
      >
        {slides.map((slide, index) => (
          <div key={index} className={classes.slide}>
            <img
              src={slide.image}
              alt={slide.text}
              className={classes.slideImage}
            />
            <div className={classes.slideContent}>
              <Typography className={classes.slideText}>
                {slide.text}
              </Typography>
              <Button
                href={slide.buttonURL}
                className={classes.slideButton}
                variant="outlined"
                style={{
                  color: grey[400],
                  borderColor: grey[400],
                  minWidth: "150px",
                  marginTop: "25px",
                }}
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
      <button onClick={handlePreviousSlide}>Previous</button>
      <button onClick={handleNextSlide}>Next</button>
    </div>
  );
};

export default Slider;
