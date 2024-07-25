import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Div = styled.div`
  padding-top: 200px;
  padding-bottom: 200px;

  @media screen and (max-width: 480px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

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
    border-radius: 10px;
    margin-bottom: 10px;
  }

  #buy-popup {
    border-radius: 10px;
    margin-top: 10px;
    background-color: rgb(40, 40, 40);
  }
`;

function Buy() {
  const [t] = useTranslation();

  return (
    <Div id="buy">
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
        {t('title.buy')}
      </motion.div>
      <img src="./assets/buy/elon.jpg" alt="melon" />
      <h1 className="description">{t('buy.description')}</h1>
      <motion.button
        id="buy-popup"
        className="btn"
        onClick={() => document.getElementById('buy-modal').showModal()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div>{t('buy.button')}</div>
      </motion.button>
    </Div>
  );
}

export default Buy;
