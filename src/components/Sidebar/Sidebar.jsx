import './Sidebar.css';
import call from '../../images/call.svg';
import telegram from '../../images/telegram.svg';
import whatsApp from '../../images/whatsApp.svg';

function Sidebar({ isContactsPage }) {
  return (
    <div className="sideBar">
      {!isContactsPage === true && (
        <>
          <a
            target="_blank"
            href="https://wa.me/+79673902333?text=Здравствуйте!%20Пишу%20вам%20с%20сайта%20td-horeca.ru.%20%20"
            rel="nofollow noreferrer"
            className="sideBar__nav"
          >
            <img src={whatsApp} alt="logo" className="sideBar__icon" />
          </a>
          <a
            target="_blank"
            rel="nofollow noreferrer"
            href="https://telegram.me/td_horeca?start=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%B8%D1%88%D1%83%20%D0%B2%D0%B0%D0%BC%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20td-horeca.ru.%20%20"
            className="sideBar__nav"
          >
            <img src={telegram} alt="logo" className="sideBar__icon" />
          </a>
          <a rel="nofollow" href="tel:+79673902333" className="sideBar__nav">
            <img src={call} alt="logo" className="sideBar__icon" />
          </a>
        </>
      )}
    </div>
  );
}

export default Sidebar;
