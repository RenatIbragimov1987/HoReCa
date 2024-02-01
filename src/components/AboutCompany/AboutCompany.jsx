import React from 'react';
import './AboutCompany.css';
import img1 from '../../images/fotoCompany/photo_10_2024-01-27_22-45-55.jpg';
import img2 from '../../images/fotoCompany/photo_11_2024-01-27_22-45-55.jpg';
import img3 from '../../images/fotoCompany/photo_12_2024-01-27_22-45-55.jpg';
import img4 from '../../images/fotoCompany/photo_1_2024-01-27_22-45-55.jpg';
import img5 from '../../images/fotoCompany/photo_2_2024-01-27_22-45-55.jpg';
import img6 from '../../images/fotoCompany/photo_3_2024-01-27_22-45-55.jpg';
import img7 from '../../images/fotoCompany/photo_4_2024-01-27_22-45-55.jpg';
import img8 from '../../images/fotoCompany/photo_5_2024-01-27_22-45-55.jpg';
import img9 from '../../images/fotoCompany/photo_6_2024-01-27_22-45-55.jpg';
import img10 from '../../images/fotoCompany/photo_7_2024-01-27_22-45-55.jpg';
import img11 from '../../images/fotoCompany/photo_8_2024-01-27_22-45-55.jpg';
import img12 from '../../images/fotoCompany/photo_9_2024-01-27_22-45-55.jpg';

export default function AboutCompany() {
  return (
    <div className="aboutCompany">
      <div className="aboutCompany__block">
        <h1 className="aboutCompany__title">О компании</h1>
        <p className="aboutCompany__subtitle">
          В HORECA мы предлагаем вам не просто посуду – мы предоставляем
          возможность превратить ваш ресторан, отель или кафе в настоящее
          произведение искусства.
        </p>
        <p className="aboutCompany__subtitle">
          Наши столовые принадлежности воплощают в себе элегантность и
          функциональность, обеспечивая высший уровень сервиса и оставляя
          незабываемое впечатление у ваших гостей.
        </p>
        <p className="aboutCompany__subtitle">
          Барный инвентарь от HORECA – это не просто инструменты для
          приготовления напитков, а настоящие аксессуары, созданные для того,
          чтобы ваши коктейли были неотразимыми. Выбирайте среди широкого
          ассортимента стильных шейкеров, утонченных бокалов и аксессуаров,
          которые добавят вашему бару уникальность и изыск.
        </p>
        <p className="aboutCompany__subtitle">
          Наш ассортимент также включает в себя кухонный инвентарь высшего
          качества – от профессиональных ножей до инновационных кухонных
          устройств. Мы заботимся о том, чтобы ваши повара могли раскрывать свой
          талант в полной мере, имея под рукой надежные и стильные инструменты.
        </p>
        <p className="aboutCompany__subtitle">
          HORECA также предлагает услуги по пошиву уникальной одежды для поваров
          и персонала. Наши дизайны сочетают в себе комфорт, функциональность и
          модный стиль, чтобы каждый член вашей команды чувствовал себя уверенно
          и профессионально.
        </p>
        <p className="aboutCompany__subtitle">
          Добро пожаловать в магазин HORECA – место, где качество встречается с
          элегантностью, и где каждая покупка становится шагом к созданию
          неповторимой атмосферы вашего заведения.
        </p>
      </div>

      <div className="aboutCompany__img">
        <img
          className="gallery__image gallery__imageSpan-hed"
          src={img3}
          alt="img"
        />

        <div className="comimg">
          <img className="gallery__image" src={img1} alt="img" />
        </div>

        <div className="comimg">
          <img className="gallery__image" src={img2} alt="img" />
        </div>
        <div className="comimg">
          <img className="gallery__image" src={img4} alt="img" />
        </div>
        <div className="comimg">
          <img className="gallery__image" src={img5} alt="img" />
        </div>
        <div className="comimg">
          <img className="gallery__image" src={img6} alt="img" />
        </div>
        <div className="comimg">
          <img className="gallery__image" src={img9} alt="img" />
        </div>
        <div className="comimg">
          <img className="gallery__image" src={img8} alt="img" />
        </div>
        <div className="comimg">
          <img className="gallery__image" src={img7} alt="img" />
        </div>
        <div className="comimg">
          <img className="gallery__image" src={img10} alt="img" />
        </div>
        <div className="comimg">
          <img className="gallery__image" src={img11} alt="img" />
        </div>
        <div className="comimg">
          <img
            className="gallery__image gallery__imageSpan-fut"
            src={img12}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}
