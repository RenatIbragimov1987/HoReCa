import './Banners.css';

import bar from '../../images/banners/bar2.jpg';
import dishes from '../../images/banners/revol.jpg';
import kitchen from '../../images/banners/kitchen.jpg';
import nude from '../../images/banners/nude.jpg';

function Banners() {
  return (
    <div className="bannersBlock">
      <div className='bannersBlock__wrapper'>
				<span className='bannersBlock__title'>Посуда</span>
        <div className="bannersBlock__img">
          <img className="bannersBlock__pic" src={dishes} alt="img" />
        </div>
        
      </div>
			
      <div className='bannersBlock__wrapper'>
				<span className='bannersBlock__title'>Стекло</span>
        <div className="bannersBlock__img">
          <img className="bannersBlock__pic" src={nude} alt="img" />
        </div>
        
      </div>
      <div className='bannersBlock__wrapper'>
				<span className='bannersBlock__title'>Кухонный инвентарь</span>
        <div className="bannersBlock__img">
          <img className="bannersBlock__pic" src={kitchen} alt="img" />
        </div>
        
      </div>

      <div className='bannersBlock__wrapper'>
				<span className='bannersBlock__title'>Барный инвентарь</span>
        <div className="bannersBlock__img">
          <img className="bannersBlock__pic" src={bar} alt="img" />
        </div>
        
      </div>
    </div>
  );
}

export default Banners;
