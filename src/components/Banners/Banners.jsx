import './Banners.css';

import bar from '../../images/banners/bar2.jpg';
import dishes from '../../images/banners/revol.jpg';
import kitchen from '../../images/banners/kitchen.jpg';
import nude from '../../images/banners/nude.jpg';

function Banners() {
  return (
    <section className="bannersBlock">
      <div className="bannersBlock__wrapper">
        <h2 className="bannersBlock__title">Посуда</h2>
        <div className="bannersBlock__img">
          <img className="bannersBlock__pic" src={dishes} alt="img" />
        </div>
      </div>
      <div className="bannersBlock__wrapper">
        <h2 className="bannersBlock__title">Стекло</h2>
        <div className="bannersBlock__img">
          <img className="bannersBlock__pic" src={nude} alt="img" />
        </div>
      </div>
      <div className="bannersBlock__wrapper">
        <h2 className="bannersBlock__title">Кухонный инвентарь</h2>
        <div className="bannersBlock__img">
          <img className="bannersBlock__pic" src={kitchen} alt="img" />
        </div>
      </div>
      <div className="bannersBlock__wrapper">
        <h2 className="bannersBlock__title">Барный инвентарь</h2>
        <div className="bannersBlock__img">
          <img className="bannersBlock__pic" src={bar} alt="img" />
        </div>
      </div>
    </section>
  );
}

export default Banners;
