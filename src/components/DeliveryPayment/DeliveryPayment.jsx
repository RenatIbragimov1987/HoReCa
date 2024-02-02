import React from 'react';
import './DeliveryPayment.css';
import baikal from '../../images/deliveryBrands/байкал.png';
import pek from '../../images/deliveryBrands/пэк.jpeg';
import cdek from '../../images/deliveryBrands/cdek-1.svg';
import newLine from '../../images/deliveryBrands/новаялиния.png';
import businessLine from '../../images/deliveryBrands/деловыелинии.jpeg';
import plskargo from '../../images/deliveryBrands/плскарго.png';
import russianPost from '../../images/deliveryBrands/почтаросс.svg.png';
import magicTrans from '../../images/deliveryBrands/MagicTrans.jpg';
import sberbank from '../../images/bankBrands/sberbank.png';
import tinkoff from '../../images/bankBrands/tinkoff.png';
import vtb from '../../images/bankBrands/vtb.png';
import rshb from '../../images/bankBrands/rshb.png';

export default function DeliveryPayment() {
  return (
    <section className="delivery">
      <h1 className="delivery__title">Доставка</h1>
      <article className="delivery__paragraf">
        <p>
          Бесплатно доставим заказ стоимостью от 5000 руб по городу Махачкала.
        </p>
        <p>
          Заказ на сумму менее 5000 руб оплачивается водителю (доставщику) по
          заранее договоренной цене.
        </p>
        <p>
          За доставку товара в другие города респ. Дагестан, оплачиваете
          водителю (доставщику) по заранее договоренной цене.
        </p>
        <p>Оплата Товара производится на условиях 100% предоплаты.</p>
        <p>
          В нашем магазине HoReCa города Дербент стоимость доставки заказов
          осуществляется на тех же условиях что и в городе Махачкала.
        </p>
        <p>
          Также осуществляем отправку товара во все города РФ транспортными
          компаниями и почтой России. Условия доставки и оплаты обговариваются
          заранее.
        </p>
        <p>
          Сотрудничаем с такими транспортными компаниями как "Magic-Trans",
          "Байкал Сервис", "ПЭК", "CDEK", "Новая Линия", "ПЛС КАРГО", "Деловые
          Линии" и "Почта России".
        </p>
        <div className="delivery__transcompany">
          <img
            src={magicTrans}
            alt="log"
            className="delivery__transcompany-log"
          />
          <img src={baikal} alt="log" className="delivery__transcompany-log" />
          <img src={pek} alt="log" className="delivery__transcompany-log" />
          <img src={cdek} alt="log" className="delivery__transcompany-log" />
          <img src={newLine} alt="log" className="delivery__transcompany-log" />
          <img
            src={plskargo}
            alt="log"
            className="delivery__transcompany-log"
          />
          <img
            src={businessLine}
            alt="log"
            className="delivery__transcompany-log"
          />
          <img
            src={russianPost}
            alt="log"
            className="delivery__transcompany-log"
          />
        </div>
      </article>
      <h1 className="delivery__title-pay">Оплата</h1>
      <p className="delivery__subtitle-pay">Наличный и безналичный расчет.</p>
      <div className="delivery__bank-log">
        <img src={sberbank} alt="log" className="delivery__img" />
        <img src={tinkoff} alt="log" className="delivery__img" />
        <img src={vtb} alt="log" className="delivery__img" />
        <img src={rshb} alt="log" className="delivery__img" />
      </div>
    </section>
  );
}
