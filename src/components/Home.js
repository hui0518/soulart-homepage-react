import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 20px;

  .image {
    width: 90vw;
    height: calc(100vh - 64px - 40px);

    border-radius: 20px;
    display: block;

    object-fit: cover;
    transition: scale 0.6s ease-in-out;
  }

  #mainText {
    font-size: 50px;
    font-weight: 400;
    font-family: Arvo, 'Noto Sans KR', sans-serif;
    color: white;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -75%);
    z-index: 5;
    white-space: pre-line;
    opacity: 0;

    transition: opacity 2s ease-in-out;
  }

  .scrolled {
    scale: 0.8;
  }
`;

function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const mainText = document.getElementById('mainText');

    setTimeout(() => {
      mainText.style.opacity = 1;
    }, 750);

    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 10);
      if (window.scrollY > 10) {
        mainText.style.transitionDuration = '0.5s';
        mainText.style.opacity = 0;
      } else {
        mainText.style.transitionDuration = '1s';
        setTimeout(() => {
          mainText.style.opacity = 1;
        }, 750);
      }
    });
  }, []);

  const [t] = useTranslation();

  return (
    <Div id="home" style={{ height: window.innerHeight - 100 }}>
      <div id="mainText">{t('slogan')}</div>
      <img
        className={classNames('image', { scrolled })}
        src="./assets/home/dark.jpg"
        alt="soulart station"
      />
    </Div>
  );
}

export default Home;
