// components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    '/img/c-b-cAbH8B-14Vo-unsplash.jpg',
    '/img/pexels-pixabay-261985.jpg',
    '/img/pexels-geometric-photography-13324313.jpg'
  ];

  return (
    <Slider {...sliderSettings}>
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image} alt={`Slide ${index + 1}`} width={1350} height={500} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
