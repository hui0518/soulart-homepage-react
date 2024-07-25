import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import settings from '../settings.json';

const Div = styled.div`
  #buttons {
    margin-top: 30px;
  }

  .carousel {
    overflow: hidden;
    width: 70vw;

    &-item {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }

  #title {
    margin-bottom: 50px;
  }

  .button {
    width: 30px;
    height: 30px;
    line-height: 40px;
    border-radius: 15px;
    margin-left: 8px;
    margin-right: 8px;
    background-color: black;
    color: white;

    background-color: rgb(30, 30, 30);

    &:hover {
      cursor: pointer;
    }

    &:hover.inactive {
      cursor: pointer;
      background-color: rgb(45, 45, 45);
    }
  }

  .active {
    background-color: grey;
  }

  .left-up {
    position: absolute;
    left: 15px;
    top: 10px;
    font-size: 50px;
    font-family: var(--arvo);

    padding-left: 5px;
    padding-right: 5px;

    @media screen and (max-width: 800px) {
      font-size: 16px;
      top: -30px;
    }
  }

  .left-down {
    position: absolute;
    left: 15px;
    bottom: 10px;
    font-size: 50px;
    font-family: var(--arvo);

    padding-left: 5px;
    padding-right: 5px;
    @media screen and (max-width: 800px) {
      font-size: 16px;
      bottom: -30px;
    }
  }

  .video-wrapper {
    position: relative;
  }
`;

function About() {
  const width = '70vw';
  const half = '35vw';

  const [cur, setCur] = useState(0);

  useEffect(() => {
    const buttons = ['button1', 'button2', 'button3'].map((b) =>
      document.getElementById(b)
    );

    const elems = ['card1', 'card2', 'card3'].map((id) =>
      document.getElementById(id)
    );

    let now = 0;
    let setNow = (i) => {
      now = i;
      setCur(i);
    };

    const moveTo = (i) => {
      setNow(i);
      elems[i].currentTime = 0;
      elems[i].play();
      const carousel = document.getElementById('carousel');
      const width = document.getElementById('card1').clientWidth;
      carousel.scrollTo({ left: width * (i + 0.5), behavior: 'smooth' });
    };

    moveTo(0);

    for (let i = 0; i < 3; i++) {
      buttons[i].addEventListener('click', () => moveTo(i));
    }

    for (let i = 0; i < 3; i++) {
      elems[i].addEventListener('ended', () => {
        if (now === i) {
          moveTo((i + 1) % elems.length);
        }
      });
    }
  }, []);

  const [t] = useTranslation();

  return (
    <Div id="about" className="column page-padding">
      <motion.div
        id="title"
        className="page-title"
        initial={{ transform: 'translate(0, 50%)', opacity: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.7,
          delay: 0.5,
        }}
        viewport={{ once: true }}
        whileInView={{ transform: 'translate(0, 0)', opacity: 1 }}
      >
        {t('title.about')}
      </motion.div>
      <div>하늘을 달리는 우리 꿈을 보아라</div>
      <div>하늘을 지키는 우리 힘을 믿으라</div>

      <div
        id="carousel"
        className="mainVideo carousel carousel-center space-x-4 p-4"
      >
        <div className="carousel-item" style={{ width: half }}></div>

        {settings.videos.map(({ id, image, up, down }) => (
          <div key={id} className="carousel-item">
            <div className="video-wrapper">
              <video
                id={id}
                className="mainVideo rounded-box"
                src={image}
                muted
                playsInline
                style={{
                  width,
                }}
              ></video>
              <div className="left-up">{t(up)}</div>
              <div className="left-down">{t(down)}</div>
            </div>
          </div>
        ))}

        <div className="carousel-item" style={{ width: half }}></div>
      </div>

      <div id="buttons" className="row">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id={`button${i}`}
            className={classNames('button', { active: cur === i - 1 })}
          />
        ))}
      </div>
    </Div>
  );
}

export default About;
