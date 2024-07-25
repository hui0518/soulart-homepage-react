import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Div = styled.div`
  background-color: rgb(30, 30, 30);

  #container {
    width: 90vw;
    margin-top: 50px;
    margin-bottom: 20px;

    * {
      width: 45vw;
      height: 35vw;
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
    <Div id="perf" className="page-padding column">
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
        {t('title.perf')}
      </motion.div>

      <div id="container" className="row">
        <img src="./assets/perf/perf1.png" alt="Performance" />
        <video src="./assets/perf/perf2.webm" muted autoPlay loop playsInline />
      </div>

      <h1 className="description">{t('perf.description')}</h1>
    </Div>
  );
}

export default Buy;
