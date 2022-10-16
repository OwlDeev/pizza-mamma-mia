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
