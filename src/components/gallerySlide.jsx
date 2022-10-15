import React from "react";
import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { Context } from "../Context";
import CardPrice from "./CardPrice";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

export default () => {
  const { pizzas } = useContext(Context);
  // Create array with 1000 slides
  //   const slides = Array.from({ length: 1000 }).map(
  //     (el, index) => `Slide ${index + 1}`
  //   );

  return (
    <Swiper modules={[Virtual]} spaceBetween={20} slidesPerView={4} virtual>
      {pizzas.map((pizza, index) => (
        <SwiperSlide key={pizza.id} virtualIndex={index}>
          {
            <CardPrice key={pizza.id} name={pizza.name} img={pizza.img} ingredients={pizza.ingredients} price={pizza.price}>
              pizza.id
            </CardPrice>
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
