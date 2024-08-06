import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.scss';
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
    <div
      id="home"
      style={{ height: window.innerHeight - 100 }}
      className="column home"
    >
      <div id="mainText" className="home-text">
        {t('slogan')}
      </div>
      <img
        className={classNames('home-image', {
          'home-scrolled': scrolled,
        })}
        src="./assets/home/dark_compressed.jpg"
        alt="soulart station"
      />
    </div>
  );
}

export default Home;
