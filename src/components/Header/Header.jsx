import React from 'react';
import './Header.css';
import horecaLog from '../../images/logoHoreca.jpg';
import callLog from '../../images/call_FILL0_wght400_GRAD0_opsz24.svg';
import mailLog from '../../images/mail_FILL0_wght400_GRAD0_opsz24.svg';
import { NavLink } from 'react-router-dom';

function Header({ isContactsPage }) {
  return (
    <div className="header__wrapper">
      <header className="header">
        <NavLink to="/" className="header__logo-wrapper">
          <img src={horecaLog} alt="logo" className="header__logo" />
        </NavLink>
        <nav className="header__menu">
          <NavLink to="/company" className="header__nav">
            О компании
          </NavLink>
          <NavLink to="/delivery" className="header__nav">
            Доставка и оплата
          </NavLink>
          <NavLink to="/services" className="header__nav">
            Услуги
          </NavLink>
          <NavLink to="/contacts" className="header__nav">
            Контакты
          </NavLink>
        </nav>
        <div className="header__phones-wrapper">
          {!isContactsPage && (
            <>
              <a
                rel="nofollow"
                href="tel:+79673902333"
                className="header__connection"
              >
                <img src={callLog} alt="call" className="header__contact" />
                +7 (967) 390-23-33
              </a>
              <a
                rel="nofollow"
                href="mailto:info@td-horeca.ru"
                className="header__connection"
              >
                <img src={mailLog} alt="call" className="header__contact" />
                info@td-horeca.ru
              </a>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
