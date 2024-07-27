import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Div = styled.div`
  .buy {
    &-title {
      margin-bottom: 40px;
    }

    &-image {
      width: 300px;
      border-radius: 10px;
      margin-bottom: 10px;
    }

    &-button {
      border-radius: 10px;
      margin-top: 10px;
      background-color: rgb(40, 40, 40);
    }

    &-description {
      white-space: pre-wrap;
    }
  }
`;

function Buy() {
  const [t] = useTranslation();

  return (
    <Div id="buy" className="buy column page-padding">
      <motion.div
        id="title"
        className="buy-title page-title"
        initial={{ transform: 'translate(0, 50%)', opacity: 0 }}
        whileInView={{ transform: 'translate(0, 0)', opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.7,
          delay: 0.5,
        }}
        viewport={{ once: true }}
      >
        {t('title.buy')}
      </motion.div>
      <img className="buy-image" src="./assets/buy/elon.jpg" alt="melon" />
      <h1 className="buy-description">{t('buy.description')}</h1>
      <motion.button
        className="buy-button btn"
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
