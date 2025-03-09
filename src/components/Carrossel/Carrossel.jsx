import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Card from '../Card/Card';

const Carrossel = ({ cards }) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
            }}
        >
            {cards.map((card, index) => (
                <SwiperSlide key={index}>
                    <Card {...card} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carrossel;