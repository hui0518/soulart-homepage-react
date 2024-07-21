import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MemberDiv = styled(motion.div)`
  display: flex;
  flex-flow: column;
  align-items: center;

  width: 200px;
  height: 400px;

  margin-left: 10px;
  margin-right: 10px;
  background: none;
  z-index: 1;
`;

function Member({ name, image }) {
  return (
    <MemberDiv whileHover={{ scale: 1.05 }} className="card">
      <figure>
        <img
          src={image}
          alt={name}
          style={{
            width: '200px',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '20px',
            zIndex: 1,
          }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </MemberDiv>
  );
}

const members = [
  {
    name: 'uzuki',
    image: '/assets/members/uzuki.webp',
  },
  {
    name: 'rin',
    image: '/assets/members/rin.webp',
  },
  {
    name: 'mio',
    image: '/assets/members/mio.webp',
  },
  {
    name: 'ikuyo',
    image: '/assets/members/ikuyo.webp',
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
    color: white;
    font-weight: 900;
    font-family: 'Josefin Sans', 'Noto Sans KR', sans-serif;
    font-style: italic;
    z-index: 1;
  }

  #membersContainer {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    align-items: center;
    width: 90%;
    justify-content: center;
    z-index: 1;
  }
`;

function Members() {
  const { t } = useTranslation();
  return (
    <Div id="members">
      <div id="title">{t('title.members')}</div>
      <div id="membersContainer">
        {members.map(({ name, image }) => (
          <Member name={t(`members.${name}`)} image={image} key={name} />
        ))}
      </div>
    </Div>
  );
}

export default Members;
