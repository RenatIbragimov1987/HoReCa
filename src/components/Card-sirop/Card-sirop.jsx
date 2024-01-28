/* eslint-disable jsx-a11y/alt-text */
import './Card-sirop.css';
import img2 from '../../images/Sirop/Amaretto_HD_317x.webp';
import img3 from '../../images/Sirop/Apple-HD_400x.webp';
import img4 from '../../images/Sirop/Blackberry-HD_400x.webp';
import img5 from '../../images/Sirop/Blackcurrant-HD_9559b66c-3343-46ef-ae5d-b31756c9b694_400x.webp';


function CardSirop() {

  return (
    <>
      <li className="cardSirop">
        {/* <div className="cardSirop__info">
      </div> */}
        <img className="cardSirop__card" src={img4} />
      </li>
    </>
  );
}

export default CardSirop;
