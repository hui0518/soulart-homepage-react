import { useEffect } from 'react';
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
  const width = '500px';
  const half = '250px';

  useEffect(() => {
    const a = document.getElementById('card1');
    const b = document.getElementById('card2');
    const c = document.getElementById('card3');

    const d = document.getElementById('carousel');

    d.scrollLeft = 250;

    a.addEventListener('ended', () => {
      d.scrollTo({ left: 500, behavior: 'smooth' });
      b.play();
    });
    b.addEventListener('ended', () => {
      d.scrollTo({ left: 1000, behavior: 'smooth' });
      c.play();
    });
    c.addEventListener('ended', () => {
      d.scrollTo({ left: 250, behavior: 'smooth' });
      a.play();
    });

    a.play();
  });

  return (
    <Div>
      <div
        style={{
          fontSize: '50px',
          color: 'white',
          fontWeight: 900,
          fontFamily: `'Josefin Sans', sans-serif`,
          fontStyle: 'italic',
        }}
      >
        About
      </div>

      <div
        className="mainVideo carousel carousel-center space-x-4 p-4"
        id="carousel"
        style={{ overflow: 'hidden' }}
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
