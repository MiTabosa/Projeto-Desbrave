import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importe o CSS do Swiper
import Card from '../Card/Card'; // Importe o componente Card

const Carrossel = ({ cards }) => {
  return (
    <div className="carrossel-container">
      <Swiper
        spaceBetween={40} // Espaçamento entre os slides
        slidesPerView={1} // Número de slides visíveis por vez
        centeredSlides={true} // Centraliza os slides ativos
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides em telas maiores que 640px
            centeredSlides: false, // Desativa centralização em telas maiores
          },
          768: {
            slidesPerView: 3, // 3 slides em telas maiores que 768px
            centeredSlides: false, // Desativa centralização em telas maiores
          },
          1024: {
            slidesPerView: 4, // 4 slides em telas maiores que 1024px
            centeredSlides: false, // Desativa centralização em telas maiores
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrossel;