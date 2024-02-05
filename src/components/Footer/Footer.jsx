import './Footer.css';
import footerLog from '../../images/logoHoreca.jpg';
import mapsLog from '../../images/Yandex_Maps_icon.svg';

function Footer({ isContactsPage }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__block">
        <div className="footer__block-log">
          <img src={footerLog} alt="logo" className="footer__log" />
          <p className="footer__copyright">"td-Horeca"{year}&copy;</p>
        </div>
        {isContactsPage ? (
          false
        ) : (
          <div className="footer__map">
            <h4 className="footer__map-title">Наше местоположение:</h4>
            <div className="footer__addres">
              <a
                target="_blank"
                href="https://yandex.ru/maps/-/CDuffO6h"
                rel="nofollow noreferrer "
              >
                <img src={mapsLog} alt="logo" className="footer__maps" />
              </a>
              <p className="footer__maps-addres">
                г. Махачкала, просп. Гамидова, 8А
              </p>
              <a
                target="_blank"
                href="https://yandex.ru/maps/-/CDu8uZ9v"
                rel="nofollow noreferrer"
              >
                <img src={mapsLog} alt="logo" className="footer__maps" />
              </a>
              <p className="footer__maps-addres">
                г. Дербент, улица 345-й агестанской Стрелковой Дивизии 6Г
              </p>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
