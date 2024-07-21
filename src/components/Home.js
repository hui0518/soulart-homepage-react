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

  .image {
    width: 90vw;
    height: 85vh;
    border-radius: 20px;
    display: block;

    scale: 1;

    transition-property: scale;
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
  }

  .not-loaded {
    display: none;
  }

  #mainText {
    font-size: 50px;
    font-weight: 400;
    font-family: Arvo, sans-serif;
    color: white;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -75%);
    z-index: 5;
    white-space: pre-line;
    opacity: 0;

    transition-property: opacity;
    transition-duration: 2s;
    transition-timing-function: ease-in-out;
  }

  .scrolled {
    scale: 0.8;
  }

  #homeImage {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
`;

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

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

    const homeImage = document.getElementById('homeImage');
    homeImage.addEventListener('load', () => setLoaded(true));
  }, []);

  const [t] = useTranslation();

  return (
    <Div id="home">
      <div
        id="wrapper"
        className={classNames('image', { scrolled, 'not-loaded': !loaded })}
      >
        <div id="mainText">{t('slogan')}</div>
        <img id="homeImage" src="/assets/home/dark.jpg" alt="soulart station" />
      </div>

      <div
        className={classNames('image', 'skeleton', { 'not-loaded': loaded })}
      />
    </Div>
  );
}

export default Home;
