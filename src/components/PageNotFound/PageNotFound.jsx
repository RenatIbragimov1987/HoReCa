import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="not-found">
      <p className="not-found__num">404</p>
      <h3 className="not-found__title">Страница не найдена</h3>
      <button className="button" onClick={goBack}>
        Назад
      </button>
    </div>
  );
}

export default PageNotFound;
