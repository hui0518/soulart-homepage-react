import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './About.scss';

function About() {
  const width = '70vw';
  const half = '35vw';

  const [cur, setCur] = useState(0);

  const move = (i) => {
    const carousel = document.getElementById('carousel');
    setCur(i);
    const a = document.getElementById(`card${i + 1}`);
    const w = a.clientWidth;
    a.currentTime = 0;
    a.play();
    carousel.scrollTo({
      left: w * (i + 0.5),
      behavior: 'smooth',
    });
  };

  const [t] = useTranslation();

  useEffect(() => {
    move(0);
  }, []);

  return (
    <div id="about" className="about">
      <motion.div
        className="about-title"
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
      <div className="about-description" style={{ whiteSpace: 'pre-wrap' }}>
        {t('about.description')}
      </div>

      <div
        id="carousel"
        className="carousel carousel-center space-x-4 p-4 about-carousel"
      >
        <div className="carousel-item" style={{ width: half }}></div>

        <div className="carousel-item">
          <div className="video">
            <video
              id="card1"
              className="rounded-box"
              src="./assets/about/1.mp4"
              muted
              playsInline
              style={{
                width,
              }}
              onEnded={() => {
                if (cur === 0) {
                  move(1);
                }
              }}
            />
            <div className="left-up video-text video-text-up">
              {t('about.leftup1')}
            </div>
            <div className="left-down video-text video-text-down">
              {t('about.leftdown1')}
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="video">
            <video
              id="card2"
              className="rounded-box"
              src="./assets/about/2.mp4"
              muted
              playsInline
              style={{
                width,
              }}
              onEnded={() => {
                if (cur === 1) {
                  move(2);
                }
              }}
            />
            <div className="left-up video-text video-text-up">
              {t('about.leftup2')}
            </div>
            <div className="left-down video-text video-text-down">
              {t('about.leftdown2')}
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="video">
            <video
              id="card3"
              className="rounded-box"
              src="./assets/about/3.mp4"
              muted
              playsInline
              style={{
                width,
              }}
              onEnded={() => {
                if (cur === 2) {
                  move(0);
                }
              }}
            />
            <div className="left-up video-text video-text-up">
              {t('about.leftup3')}
            </div>
            <div className="left-down video-text video-text-down">
              {t('about.leftdown3')}
            </div>
          </div>
        </div>

        <div className="carousel-item" style={{ width: half }}></div>
      </div>

      <div id="buttons" className="about-buttons">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id={`button1`}
          className={classNames('button', {
            active: cur === 0,
            inactive: cur !== 0,
          })}
          onClick={() => move(0)}
        />
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id={`button2`}
          className={classNames('button', {
            active: cur === 1,
            inactive: cur !== 1,
          })}
          onClick={() => move(1)}
        />
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id={`button3`}
          className={classNames('button', {
            active: cur === 2,
            inactive: cur !== 2,
          })}
          onClick={() => move(2)}
        />
      </div>
    </div>
  );
}

export default About;
