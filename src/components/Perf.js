import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Div = styled.div`
  padding-top: 200px;
  padding-bottom: 200px;
  background-color: rgb(30, 30, 30);

  display: flex;
  flex-flow: column;
  align-items: center;

  #title {
    color: white;
    font-size: 50px;
    font-weight: 900;
    font-family: 'Josefin Sans', 'Noto Sans KR', sans-serif;
    font-style: italic;
    margin-bottom: 50px;
  }

  .description {
    font-family: 'Noto Sans KR', sans-serif;
  }

  img {
    width: 300px;
  }

  #container {
    width: 90vw;

    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    * {
      width: 45vw;
      height: 35vh;
      margin-left: 10px;
      margin-right: 10px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
`;

function Buy() {
  const [t] = useTranslation();

  return (
    <Div id="perf">
      <motion.div
        id="title"
        initial={{ transform: 'translate(0, 50%)', opacity: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.7,
          delay: 0.5,
        }}
        viewport={{ once: true }}
        whileInView={{ transform: 'translate(0, 0)', opacity: 1 }}
      >
        {t('title.perf')}
      </motion.div>

      <div id="container">
        <img src="./assets/perf/perf1.png" alt="Performance" />
        <video
          src="./assets/perf/perf2.webm"
          muted
          autoPlay
          loop
          playsInline
        ></video>
      </div>

      <h1 className="description">{t('perf.description')}</h1>
    </Div>
  );
}

export default Buy;
