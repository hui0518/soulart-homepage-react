import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PartnerDiv = styled(motion.div)`
  width: 200px;
  height: 300px;
  margin-left: 10px;
  margin-right: 10px;
  background: none;

  display: flex;
  flex-flow: column;
  align-items: center;

  .partnerImage {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
  }
`;

function Partner({ name, image }) {
  return (
    <PartnerDiv whileHover={{ scale: 1.05 }} className="card w-96">
      <figure>
        <img className="partnerImage" src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </PartnerDiv>
  );
}

const partners = [
  {
    name: 'hololive',
    image: '/assets/partners/hololive.jpg',
  },
  {
    name: 'idolmaster',
    image: '/assets/partners/idolmaster.webp',
  },
  {
    name: 'kaist',
    image: '/assets/partners/kaist.jpg',
  },
  {
    name: 'tesla',
    image: '/assets/partners/tesla.jpg',
  },
];

const Div = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column;
  align-items: center;

  #title {
    margin-top: 30px;
    margin-bottom: 30px;

    font-size: 50px;
    font-weight: 900;
    font-family: 'Josefin Sans', 'Noto Sans KR', sans-serif;
    font-family: italic;
    color: white;
  }

  #partnersContainer {
    width: 90%;

    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

function Partners() {
  const { t } = useTranslation();
  return (
    <Div id="partners">
      <div id="title">{t('title.partners')}</div>
      <div id="partnersContainer">
        {partners.map(({ name, image }) => (
          <Partner name={t(`partners.${name}`)} image={image} key={name} />
        ))}
      </div>
    </Div>
  );
}

export default Partners;
