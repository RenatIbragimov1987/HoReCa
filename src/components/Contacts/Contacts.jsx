import React from 'react';
import './Contacts.css';
import phoneLogo from '../../images/Tilda_Icons_2web_phone.svg';
import mailLogo from '../../images/Tilda_Icons_10cw_mail.svg';
import mapLogo from '../../images/Tilda_Icons_3st_map.svg';
import clockLogo from '../../images/Tilda_Icons_11mu_clock.svg';
import mapsLog from '../../images/Yandex_Maps_icon.svg';
import whatsAppLog from '../../images/whatsApp.svg';
import telegrammLog from '../../images/telegram.svg';

export default function Contacts() {
  return (
    <div className="contacts">
      <h1 className="contacts__title">Контакты</h1>
      <p className="contacts__paragraf">
        Дорогие покупатели! Мы будем рады помочь и подсказать вам по всем
        вопросам которые у вас возникли к нашему магазину. Вы можете выбрать
        любой способ связи с нами. Если вы позвонили в нерабочее время, мы
        свяжемся с вами утром следующего рабочего дня. Сообщения обрабатываются
        тоже в рабочее время. Ждем вас в нашем магазине HoReCa.
      </p>
      <div className="contacts__wrapper">
        <div className="contacts__block">
          <a
            className="contacts__img_dec"
            rel="nofollow"
            href="tel:+79673902333"
          >
            <img className="contacts__logo" src={phoneLogo} alt="img" />
          </a>
          <span className="contacts__card-name">Телефон</span>
          <a rel="nofollow" href="tel:+79673902333" className="contacts__link">
            +7 (967) 390-23-33
          </a>
        </div>
        <div className="contacts__block">
          <a
            className="contacts__img_dec"
            rel="nofollow"
            href="mailto:info@td-horeca.ru"
          >
            <img className="contacts__logo" src={mailLogo} alt="img" />
          </a>
          <span className="contacts__card-name">E-mail</span>
          <a
            rel="nofollow"
            href="mailto:info@td-horeca.ru"
            className="contacts__link"
          >
            info@td-horeca.ru
          </a>
        </div>
        <div className="contacts__block">
          <img className="contacts__logo" src={mapLogo} alt="img" />
          <span className="contacts__card-name">Адрес</span>
          <div className="contacts__adress">
            <a
              target="_blank"
              href="https://yandex.ru/maps/-/CDuffO6h"
              rel="noreferrer"
            >
              <img src={mapsLog} alt="logo" className="contacts__maps" />
            </a>
            <p className="contacts__text">г. Махачкала, просп. Гамидова, 8А</p>
          </div>
          <div className="contacts__adress">
            <a
              target="_blank"
              href="https://yandex.ru/maps/-/CDu8uZ9v"
              rel="noreferrer"
            >
              <img src={mapsLog} alt="logo" className="contacts__maps" />
            </a>
            <p className="contacts__text">
              г. Дербент, улица 345-й Дагестанской Стрелковой Дивизии 6Г
            </p>
          </div>
        </div>
        <div className="contacts__block">
          <img className="contacts__logo" src={clockLogo} alt="img" />
          <span className="contacts__card-name">Режим работы</span>
          <p className="contacts__time">Ежедневно с 9:00 - 18:00</p>
        </div>
      </div>
      <h2 className="contacts__subtitle">Мы в соц. сетях</h2>
      <div className="contacts__block-network">
        <a
          target="_blank"
          rel="nofollow noreferrer"
          href="https://telegram.me/td_horeca"
          className="contacts__network"
        >
          <img
            src={telegrammLog}
            alt="logo"
            className="contacts__network-log"
          />
        </a>
        <a
          target="_blank"
          rel="nofollow noreferrer"
          href="https://wa.me/79673902333?text=Здравствуйте!%20Пишу%20вам%20с%20сайта%20td-horeca.ru."
          className="contacts__network"
        >
          <img src={whatsAppLog} alt="logo" className="contacts__network-log" />
        </a>
      </div>
    </div>
  );
}
