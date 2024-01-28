// import { useRef, useEffect } from 'react';
// import { register } from 'swiper/element/bundle';

import Slider from '../Slider/Slider';
import Banners from '../Banners/Banners';
import SliderBrandBottom from '../SliderBrandBottom/SliderBrandBottom';
import TizersList from '../TizersList/TizersList';

import './Main.css';

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">
        Добро пожаловать в уникальный мир изысканности и профессионализма –
        торговый дом HoReCa
      </h1>
      <Slider />
      <Banners />
      <SliderBrandBottom />
      <TizersList />
      {/* <ul className="main__swapper">
			<CardSirop />
				{cards.map((card) => (
          <Card
            card={card}
            key={card._id}
          />
        ))}
      </ul> */}
    </main>
  );
}

export default Main;
