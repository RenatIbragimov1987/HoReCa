import './MainNavPanel.css';

function MainNavPanel() {
  return (
    <div>
      <nav className="menuNav">
        <ul className="menuBlock">
          <li className="menuTitle">
            <a className="menuLink" href="?">
              Посуда
            </a>
            <ul className="menuSubtitle">
              <li>
                <a className="menuLink" href="?">
                  Чайники
                </a>
              </li>
              <li>
                <a className="menuLink" href="?">
                  Чайные аксесуары
                </a>
              </li>
              <li>
                <a className="menuLink" href="?">
                  Посуда для готовки
                </a>
              </li>
            </ul>
          </li>
          <li className="menuTitle">
            <a className="menuLink" href="?">
              Инвентарь
            </a>
            <ul>
              <li>
                <a className="menuLink" href="?">
                  Барный инвентарь
                </a>
              </li>
              <li>
                <a className="menuLink" href="?">
                  Аксесуары бариста
                </a>
              </li>
            </ul>
          </li>
          <li className="menuTitle">
            <a className="menuLink" href="?">
              Стекло
            </a>
            <ul>
              <li>
                <a className="menuLink" href="?">
                  Бокалы
                </a>
              </li>
              <li>
                <a className="menuLink" href="?">
                  Стаканы
                </a>
              </li>
            </ul>
          </li>
          <li className="menuTitle">
            <a className="menuLink" href="?">
              Сиропы
            </a>
            <ul>
              <li>
                <a className="menuLink" href="?">
                  Monin
                </a>
              </li>
              <li>
                <a className="menuLink" href="?">
                  1988
                </a>
              </li>
            </ul>
          </li>
          <li className="menuTitle">
            <a className="menuLink" href="?">
              Кофе, чаи, шоколад
            </a>
            <ul>
              <li>
                <a className="menuLink" href="?">
                  Кофе
                </a>
              </li>
              <li>
                <a className="menuLink" href="?">
                  Чаи
                </a>
              </li>
              <li>
                <a className="menuLink" href="?">
                  Шоколад
                </a>
              </li>
            </ul>
          </li>
          <li className="menuTitle">
            <a className="menuLink" href="?">
              Ателье
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavPanel;
