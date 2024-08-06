import { useEffect, useState } from 'react';
import classNames from 'classnames';

import i18n from '../locales/i18n';
import { useTranslation } from 'react-i18next';
import './Header.scss';

function Header() {
  const [lang, setLang] = useState('ko');
  const [scrolled, setScrolled] = useState(false);
  const [t] = useTranslation();

  const changeLanguage = () => {
    const nextLang = lang === 'ko' ? 'en' : 'ko';
    setLang(nextLang);
    i18n.changeLanguage(nextLang);
  };

  const moveTo = (id) => {
    const page = document.getElementById(id);
    window.scrollTo({
      top: id === 'home' ? 0 : page.offsetTop - 64,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 10);
    });
  }, []);

  const buttons = [
    {
      id: 'home',
    },
    {
      id: 'about',
    },
    {
      id: 'perf',
    },
    {
      id: 'members',
    },
    {
      id: 'partners',
    },
    {
      id: 'buy',
    },
  ];

  return (
    <div>
      <div className={classNames('navbar', { 'scrolled-header': scrolled })}>
        <div className="navbar-start">
          <img
            className="navbar-logo"
            src="./assets/logo.png"
            alt="company logo"
          />
          <div className="dropdown">
            <div className="btn btn-ghost lg:hidden" tabIndex={0} role="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2"
              tabIndex={0}
            >
              {buttons.map(({ id }) => (
                <li key={`${id}_dropdown`}>
                  <a onClick={() => moveTo(id)}>{t(`header.${id}`)}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="navbar-buttons menu menu-horizontal px-1">
            {buttons.map(({ id }) => (
              <li key={id}>
                <a onClick={() => moveTo(id)}>{t(`header.${id}`)}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <span className="btn navbar-lang" onClick={changeLanguage}>
            {lang === 'ko' ? 'View in English' : '한국어로 보기'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
