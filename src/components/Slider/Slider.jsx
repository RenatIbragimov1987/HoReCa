import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerRona from '../../images/slider/https___complexbar.ru_images_abt__ut2_banners_all_247_Anons_rona_medea_diverto-2272x640_v3.webp';
import bannerBona from '../../images/slider/bona.png';
import proffsyrup from '../../images/slider/proffsirop.png';
import monin from '../../images/slider/monin.png';
import sale from '../../images/slider/sale.png';

import './Slider.css';

export default function Slider() {
  return (
    <Carousel className="slider__wrapper carousel-inner">
      
        <Carousel.Item  >
          <img src={bannerRona} alt="banner" className="slider__img" />
					<div className='carousel-indicators'></div>
        </Carousel.Item>
     
      
        <Carousel.Item  >
          <img src={bannerBona} alt="banner" className="slider__img" />
					
        </Carousel.Item>
     {/* <div className='carousel-indicators'></div> */}
      
        <Carousel.Item  >
          <img src={proffsyrup} alt="banner" className="slider__img" />
				
        </Carousel.Item>
     	{/* <div className='carousel-indicators'></div> */}
      
        <Carousel.Item  >
          <img src={monin} alt="banner" className="slider__img" />
					
        </Carousel.Item>
     {/* <div className='carousel-indicators'></div> */}
      
        <Carousel.Item className="slider" >
          <img src={sale} alt="banner" className="slider__img" />
					
        </Carousel.Item>
				
      {/* <div className='carousel-indicators'></div> */}
    </Carousel>
  );
}
