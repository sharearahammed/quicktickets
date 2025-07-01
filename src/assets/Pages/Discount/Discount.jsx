import React from "react";
import { Box, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../../svg/banner.svg?react";

const Discount = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container>
      <Box sx={{ mt: 3 }}>
        <Slider {...settings}>
          {[1, 2, 3,4,5].map((_, index) => (
            <Box key={index}>
              <Banner />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Discount;
