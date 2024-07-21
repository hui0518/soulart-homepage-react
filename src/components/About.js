import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  margin-top: 5rem;
  margin-bottom: 5rem;

  #carousel {
    width: 90vw;
    height: 500px;
  }
`;

function About() {
  const width = '85vw';
  const half = '40vw';
  const outerWidth = '90vw';

  useEffect(() => {
    const elems = ['card1', 'card2', 'card3'].map((id) =>
      document.getElementById(id)
    );
    const w = elems[0].clientWidth;
    const d = document.getElementById('carousel');
    d.scrollLeft = w * 0.5;

    for (const i in elems) {
      const next = (i + 1) % elems.length;
      elems[i].addEventListener('ended', () => {
        d.scrollTo({ left: w * (next + 0.5), behavior: 'smooth' });
        elems[next].play();
      });
    }

    elems[0].play();
  });

  const [t] = useTranslation();

  return (
    <Div id="about">
      <div
        style={{
          fontSize: '50px',
          color: 'white',
          fontWeight: 900,
          fontFamily: `'Josefin Sans', sans-serif`,
          fontStyle: 'italic',
        }}
      >
        {t('title.about')}
      </div>

      <div
        className="mainVideo carousel carousel-center space-x-4 p-4"
        id="carousel"
        style={{ overflow: 'hidden', width: outerWidth }}
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
    </Div>
  );
}

export default About;
