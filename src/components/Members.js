import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import settings from '../settings';

const MemberDiv = styled(motion.div)`
  width: 200px;
  height: 400px;

  margin-left: var(--card-margin);
  margin-right: var(--card-margin);
  background: none;
  z-index: 1;

  @media screen and (max-width: 480px) {
    width: 40vw;
  }

  .member-image {
    width: var(--card-width);
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
    z-index: 1;
  }
`;

function Member({ name, image }) {
  return (
    <MemberDiv whileHover={{ scale: 1.05 }} className="card column">
      <img className="member-image" src={image} alt={name} />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </MemberDiv>
  );
}

const Div = styled.div`
  --card-width: 200px;
  --card-margin: 10px;

  width: 100%;

  #title {
    margin-top: 30px;
    margin-bottom: 50px;
  }

  #members-container {
    width: 90%;
    max-width: calc(var(--card-width) * 4 + var(--card-margin) * 8);
    @media screen and (max-width: 480px) {
      width: 100%;
    }
    color: white;
    flex-wrap: wrap;
  }
`;

function Members() {
  const { t } = useTranslation();
  return (
    <Div id="members" className="column page-padding">
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
      <div id="members-container" className="row">
        {settings.members.map(({ name, image }) => (
          <Member name={t(`members.${name}`)} image={image} key={name} />
        ))}
      </div>
    </Div>
  );
}

export default Members;
