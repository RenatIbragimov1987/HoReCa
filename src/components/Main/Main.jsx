import Slider from '../Slider/Slider';
import Banners from '../Banners/Banners';
import SliderBrand from '../SliderBrand/SliderBrand';
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
      <SliderBrand />
      <TizersList />
    </main>
  );
}

export default Main;
