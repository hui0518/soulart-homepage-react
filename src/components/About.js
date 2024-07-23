import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Div = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;

  display: flex;
  flex-flow: column;
  align-items: center;

  #carousel {
    width: 90vw;
    height: 500px;
    overflow: hidden;
  }

  .title {
    font-size: 50px;
    font-weight: 900;
    font-family: 'Josefin Sans', 'Noto Sans KR', sans-serif;
    font-style: italic;
    margin-bottom: 50px;
  }

  #buttons {
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  .button {
    width: 30px;
    height: 30px;
    line-height: 40px;
    border-radius: 15px;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 30px;
    background-color: black;
    font-family: Arvo, 'Noto Sans KR', sans-serif;
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

  .carousel-item {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

function About() {
  const width = '85vw';
  const half = '40vw';

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
    <Div id="about">
      <div className="title">{t('title.about')}</div>

      <div
        id="carousel"
        className="mainVideo carousel carousel-center space-x-4 p-4"
      >
        <div className="carousel-item" style={{ width: half }}></div>
        <div className="carousel-item">
          <video
            id="card1"
            className="mainVideo rounded-box"
            src="/assets/about/1.mp4"
            muted
            style={{
              width,
            }}
          ></video>
        </div>
        <div className="carousel-item">
          <video
            id="card2"
            className="mainVideo rounded-box"
            src="/assets/about/2.mp4"
            muted
            style={{
              width,
            }}
          ></video>
        </div>
        <div className="carousel-item">
          <video
            id="card3"
            className="mainVideo rounded-box"
            src="/assets/about/3.mp4"
            muted
            style={{
              width,
            }}
          ></video>
        </div>
        <div className="carousel-item" style={{ width: half }}></div>
      </div>

      <div id="buttons">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.9,
          }}
          id="button1"
          className={classNames('button', {
            active: cur === 0,
          })}
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.95,
          }}
          id="button2"
          className={classNames('button', {
            active: cur === 1,
            inactive: cur !== 1,
          })}
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.9,
          }}
          id="button3"
          className={classNames('button', {
            active: cur === 2,
            inactive: cur !== 2,
          })}
        ></motion.div>
      </div>
    </Div>
  );
}

export default About;
