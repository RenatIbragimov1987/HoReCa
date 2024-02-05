import './TizersList.css';
import delivery from '../../images/tizers/delivery.svg';
import customerService from '../../images/tizers/customer-service.svg';
import affordablePrices from '../../images/tizers/affordable-prices.svg';
import discount from '../../images/tizers/discount.svg';

export default function TizersList() {
  return (
    <section className="tizers">
      <div className="tizers__block">
        <img className="tizers__img" src={delivery} alt="pic" />
        <p className="tizers__text">Быстрая доставка</p>
      </div>
      <div className="tizers__block">
        <img className="tizers__img" src={customerService} alt="pic" />
        <p className="tizers__text">Превосходный клиентский сервис</p>
      </div>
      <div className="tizers__block">
        <img className="tizers__img" src={discount} alt="pic" />
        <p className="tizers__text">Выгодные скидки</p>
      </div>
      <div className="tizers__block">
        <img className="tizers__img" src={affordablePrices} alt="pic" />
        <p className="tizers__text">Доступные цены</p>
      </div>
    </section>
  );
}
