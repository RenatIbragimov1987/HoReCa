import React, { useState } from 'react';
import PopupImg from '../PopupImg/PopupImg';
import mapCards from '../../utils/mapCardsForCompany/mapsCardCompany';
import './AboutCompany.css';

export default function AboutCompany() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  function openPopupImage(index) {
    setOpen(true);
    setSelectedIndex(index);
  }
  function closePopupImage() {
    setOpen(false);
  }
  return (
    <>
      <PopupImg
        open={open}
        setOpen={setOpen}
        closePopupImage={closePopupImage}
        card={mapCards[selectedIndex]}
      />
      <div className="aboutCompany">
        <div className="aboutCompany__text">
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
            устройств. Мы заботимся о том, чтобы ваши повара могли раскрывать
            свой талант в полной мере, имея под рукой надежные и стильные
            инструменты.
          </p>
          <p className="aboutCompany__subtitle">
            HORECA также предлагает услуги по пошиву уникальной одежды для
            поваров и персонала. Наши дизайны сочетают в себе комфорт,
            функциональность и модный стиль, чтобы каждый член вашей команды
            чувствовал себя уверенно и профессионально.
          </p>
          <p className="aboutCompany__subtitle">
            Добро пожаловать в магазин HORECA – место, где качество встречается
            с элегантностью, и где каждая покупка становится шагом к созданию
            неповторимой атмосферы вашего заведения.
          </p>
        </div>

        <div className="aboutCompany__image-wrapp">
          {mapCards.map((cards, index) => (
            <img
              key={index}
              onClick={() => openPopupImage(index)}
              className="aboutCompany__image"
              src={cards}
              alt="img"
            />
          ))}
        </div>
      </div>
    </>
  );
}
