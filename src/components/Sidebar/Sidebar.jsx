import './Sidebar.css';
import call from '../../images/call.svg';
import telegram from '../../images/telegram.svg';
import whatsApp from '../../images/whatsApp.svg';
import insta from '../../images/insta.svg';

function Sidebar({ isContactsPage }) {
  return (
    <aside className="sideBar">
      {!isContactsPage === true && (
        <>
          <a
            target="_blank"
            href="https://wa.me/79673902333?text=Здравствуйте!%20Пишу%20вам%20с%20сайта%20td-horeca.ru."
            rel="nofollow noreferrer"
            className="sideBar__nav"
          >
            <img src={whatsApp} alt="logo" className="sideBar__icon" />
          </a>
          <a
            target="_blank"
            href="https://t.me/td_horeca"
            rel="nofollow noreferrer"
            className="sideBar__nav"
          >
            <img src={telegram} alt="logo" className="sideBar__icon" />
          </a>
          <a rel="nofollow" href="tel:+79673902333" className="sideBar__nav">
            <img src={call} alt="logo" className="sideBar__icon" />
          </a>
					<a
            target="_blank"
            href="https://www.instagram.com/ho_re_ca"
            rel="nofollow noreferrer"
            className="sideBar__nav"
          >
            <img src={insta} alt="logo" className="sideBar__icon" />
          </a>
        </>
      )}
    </aside>
  );
}

export default Sidebar;
