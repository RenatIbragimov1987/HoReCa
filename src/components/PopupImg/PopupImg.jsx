/* eslint-disable jsx-a11y/img-redundant-alt */
import './PopupImg.css';
import closeIcon from '../../images/closeIcon.png';

function PopupImg({ open, closePopupImage, card }) {
  return (
    <div className={`popup ${open ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_type_image">
        <button
          type="button"
          className="popup__close-icon popup__close-icon_img"
          onClick={closePopupImage}
        >
          <img src={closeIcon} className="popup__icon" alt="logo" />
        </button>
        <img src={card} className="popup__img"  alt="image" />
      </div>
    </div>
  );
}

export default PopupImg;
