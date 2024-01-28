import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerRona from '../../images/slider/https___complexbar.ru_images_abt__ut2_banners_all_247_Anons_rona_medea_diverto-2272x640_v3.webp';
import bannerBona from '../../images/slider/bona.jpg';
import proffsyrup from '../../images/slider/proffsyrup.jpg';
import monin from '../../images/slider/monin.jpg';
import sale from '../../images/slider/10.png';


import './Slider.css';

export default function Slider() {
  return (
    <Carousel className='slider__wrapper'>
      <Carousel.Item>
        <img src={bannerRona} alt="banner" className="slider" />
      </Carousel.Item>
			<Carousel.Item>
        <img src={bannerBona} alt="banner" className="slider" />
      </Carousel.Item>
			<Carousel.Item>
        <img src={proffsyrup} alt="banner" className="slider" />
      </Carousel.Item>
			<Carousel.Item>
        <img src={monin} alt="banner" className="slider" />
      </Carousel.Item>
			<Carousel.Item>
        <img src={sale} alt="banner" className="slider" />
      </Carousel.Item>
    </Carousel>
  );
}
