import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; 
import 'swiper/swiper-bundle.css'; 
import 'swiper/css/pagination';
import Card from '../Card/Card'; 
import CardCurso from '../CardCurso/CardCurso';

const Carrossel = ({ cards, cardTipo }) => {
  return (
    <div className="carrossel-container">
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable: true, 
        }}
        modules={[Pagination]} 
        breakpoints={{
          640: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 3,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 4,
            centeredSlides: false,
          },
        }}
      >
        {Array.isArray(cards) && cards.map((card, index) => (
  <SwiperSlide key={index}>
    {cardTipo === 'CardCurso' ? (
      <CardCurso curso={card} /> 
    ) : (
      <Card {...card} /> 
    )}
  </SwiperSlide>
))}
      </Swiper>
    </div>
  );
};

export default Carrossel;