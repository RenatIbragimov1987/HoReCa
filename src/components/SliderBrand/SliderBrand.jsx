/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './SliderBrand.css';
import items from '../../utils/logoBrandsSlide';


export default function SliderBrand() {
  const [width, setWidth] = useState(window.innerWidth);
  const [resp, setResp] = useState({});

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  const responsive = {
    0: { items: 8 },
    1000: { items: 8 },
  };

  const res = {
    0: { items: 4 },
    1000: { items: 4 },
  };

  useEffect(() => {
    if (width >= 1200) {
      setResp(responsive);
    } else {
      setResp(res);
    }
  }, [width]);



  return (
    <div className="sliderBrand">
      <AliceCarousel
        items={items}
        responsive={resp}
        autoPlay={true}
        mouseDragEnabled={true}
        infinite={true}
        keysControlDisabled={true}
        autoPlayInterval={3000}
        playButtonEnabled={true}
        dotsClass="custom-dots-class"
      />
    </div>
  );
}
