/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import './Header.css';
import horecaLog from '../../images/logoHoreca.jpg';
import callLog from '../../images/call_FILL0_wght400_GRAD0_opsz24.svg';
import mailLog from '../../images/mail_FILL0_wght400_GRAD0_opsz24.svg';
import { NavLink } from 'react-router-dom';
import { MenuButton } from '../MenuButton/MenuButton';

function Header({ isContactsPage }) {
  const [isOpen, setOpen] = useState();
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  useEffect(() => {
    let startTouchX = 0;
    let endTouchX = 0;
    let startTouchY = 0;
    let endTouchY = 0;

    document.addEventListener('touchstart', (event) => {
      startTouchX = event.changedTouches[0].pageX;
      startTouchY = event.changedTouches[0].pageY;
    });

    document.addEventListener('touchend', (event) => {
      endTouchX = event.changedTouches[0].pageX;
      endTouchY = event.changedTouches[0].pageY;
      if (
        startTouchX < 100 &&
        Math.abs(endTouchY - startTouchY) < 40 &&
        endTouchX > startTouchX
      )
        setOpen(true);
      if (
        startTouchX < 240 &&
        Math.abs(endTouchY - startTouchY) < 40 &&
        endTouchX < startTouchX
      )
        setOpen(false);
    });
  }, []);

  return (
    <div className="header__wrapper">
      <header className="header">
        <div className="header__menu-block">
          <NavLink to="/" className="header__logo-wrapper">
            <img src={horecaLog} alt="logo" className="header__logo" />
          </NavLink>
          <nav
            className={`header__menu header__nav ${isOpen ? 'active' : ''}`}
            ref={menuRef}
          >
            <div className="header__nav-list ">
              <NavLink to="/company" className="header__nav-item">
                О компании
              </NavLink>
              <NavLink to="/delivery" className="header__nav-item">
                Доставка и оплата
              </NavLink>
              <NavLink to="/services" className="header__nav-item">
                Услуги
              </NavLink>
              <NavLink to="/contacts" className="header__nav-item">
                Контакты
              </NavLink>
            </div>
          </nav>
        </div>
        <MenuButton
          className=""
          isActive={isOpen}
          onClick={() => setOpen(!isOpen)}
        />
        <div className="header__call-mail-wrapper">
          {!isContactsPage && (
            <div className="header__call-mail-block">
              <a
                rel="nofollow"
                href="tel:+79673902333"
                className="header__connection"
              >
                <img src={callLog} alt="call" className="header__contact" />
                +7 (967) 390-23-33
              </a>
              <a
                rel="nofollow noreferrer"
                href="mailto:info@td-horeca.ru"
                className="header__connection"
              >
                <img src={mailLog} alt="call" className="header__contact" />
                info@td-horeca.ru
              </a>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
