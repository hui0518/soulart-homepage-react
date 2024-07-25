import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import settings from '../settings';

const MemberDiv = styled(motion.div)`
  width: 200px;
  height: 400px;

  display: flex;
  flex-flow: column;
  align-items: center;

  margin-left: 10px;
  margin-right: 10px;
  background: none;
  z-index: 1;

  @media screen and (max-width: 480px) {
    width: 40vw;
  }

  .member-image {
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
    z-index: 1;
  }
`;

function Member({ name, image }) {
  return (
    <MemberDiv whileHover={{ scale: 1.05 }} className="card">
      <figure>
        <img className="member-image" src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </MemberDiv>
  );
}

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;

  padding-top: 150px;
  padding-bottom: 150px;

  @media screen and (max-width: 480px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  display: flex;
  flex-flow: column;
  justify-content: center;

  #title {
    margin-top: 30px;
    margin-bottom: 50px;
  }

  #members-container {
    width: 90%;
    color: white;

    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

function Members() {
  const { t } = useTranslation();
  return (
    <Div id="members">
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
        {t('title.members')}
      </motion.div>
      <div id="members-container">
        {settings.members.map(({ name, image }) => (
          <Member name={t(`members.${name}`)} image={image} key={name} />
        ))}
      </div>
    </Div>
  );
}

export default Members;
