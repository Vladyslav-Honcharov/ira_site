import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  slider: {
    height: "70vh",
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
    height: "70vh",
    objectFit: "cover",
  },
  slideContent: {
    position: "absolute",
    bottom: theme.spacing(4),
    left: theme.spacing(4),
    color: "white",
  },
  slideText: {
    fontWeight: "bold",
    color: "black",
    fontFamily: "Didact Gothic, sans-seri",
    fontSize: 30,
  },
  slideButton: {
    color: "secondary",
    marginTop: theme.spacing(5),
  },
}));

const Slider = () => {
  const classes = useStyles();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image:
        "https://img.freepik.com/premium-vector/beautiful-and-luxurious-and-modern-woman-s-eyelashes-and-eyebrows-logo-design-logo-for-business-beauty-salon-makeup-eyelash-shop_661039-111.jpg",
      text: "Швидкий онлайн запис ",
      buttonText: "Записатись",
      buttonURL: "/Appointment",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdQt_vgAqCAEX_LFl9QkXdwLfTud3miCWHA&usqp=CAU",
      text: "Найкрасивіші брови",
      buttonText: "Приклади робіт",
      buttonURL: "/Portfolio",
    },
    {
      image:
        "https://images.prom.ua/2730202058_w640_h640_vinilovaya-naklejka-brows.jpg",
      text: "Найкращі вії",
      buttonText: "Ціни",
      buttonURL: "/Price",
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
        interval={5000}
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
                color="secondary"
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
