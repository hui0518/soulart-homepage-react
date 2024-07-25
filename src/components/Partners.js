import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import settings from '../settings.json';

const PartnerDiv = styled(motion.div)`
  width: 200px;
  height: 300px;

  margin-left: 10px;
  margin-right: 10px;
  background: none;

  @media screen and (max-width: 480px) {
    width: 40vw;
  }

  .partner-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
  }
`;

function Partner({ name, image }) {
  return (
    <PartnerDiv whileHover={{ scale: 1.05 }} className="card w-96 column">
      <img className="partner-image" src={image} alt={name} />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </PartnerDiv>
  );
}

const Div = styled.div`
  width: 100%;
  background-color: rgb(30, 30, 30);

  #title {
    margin-top: 30px;
    margin-bottom: 50px;
  }

  #partners-container {
    width: 90%;
    flex-wrap: wrap;
  }
`;

function Partners() {
  const { t } = useTranslation();
  return (
    <Div id="partners" className="column page-padding">
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
        {t('title.partners')}
      </motion.div>
      <div id="partners-container" className="row">
        {settings.partners.map(({ name, image }) => (
          <Partner name={t(`partners.${name}`)} image={image} key={name} />
        ))}
      </div>
    </Div>
  );
}

export default Partners;
