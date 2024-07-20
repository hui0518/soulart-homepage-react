import { useEffect, useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import i18n from '../locales/i18n';

const Div = styled.div`
  .navbar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    z-index: 10;

    transition-duration: 0.4s;
    transition-property: background, border-radius, box-shadow, backdrop-filter,
      -webkit-backdrop-filter;
  }

  .scrolled {
    background: rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .dropdown-content {
    background: rgb(20, 20, 20);
    border-radius: 10px;
  }

  .navbar-end {
    span {
      background: none;
      border: none;
    }
  }
`;

function Header() {
  const [lang, setLang] = useState('ko');
  const [scrolled, setScrolled] = useState(false);

  const changeLanguage = () => {
    const nextLang = lang === 'ko' ? 'en' : 'ko';
    setLang(nextLang);
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 10);
    });
  }, []);

  const buttons = [
    {
      name: 'Home',
    },
    {
      name: 'About',
    },
    {
      name: 'Members',
    },
    {
      name: 'Partners',
    },
    {
      name: 'Buy',
    },
  ];

  return (
    <Div>
      <div className={classNames('navbar', { scrolled })}>
        <div className="navbar-start">
          <img
            src="/assets/logo.png"
            width="100px"
            alt="company logo"
            style={{
              marginLeft: '20px',
              marginRight: '10px',
            }}
          ></img>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2"
            >
              {buttons.map(({ name }) => (
                <li href="/" key={name + 'asdf'}>
                  <a href="/">{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className="menu menu-horizontal px-1"
            style={{
              fontFamily: 'Arvo',
              fontSize: '20px',
              fontWeight: '400',
              color: 'white',
            }}
          >
            {buttons.map(({ name }) => (
              <li key={name + 'asdfasdf'}>
                <a href="/">{name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <span className="btn" onClick={changeLanguage}>
            {lang === 'ko' ? 'View in English' : '한국어로 보기'}
          </span>
        </div>
      </div>
    </Div>
  );
}

export default Header;
