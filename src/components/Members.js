import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Member({ name, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="card bg-base-100 w-96 shadow-xl"
      style={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        width: '200px',
        height: '400px',
        marginLeft: '10px',
        marginRight: '10px',
        background: 'none',
      }}
    >
      <figure>
        <img
          src={image}
          alt={name}
          style={{
            width: '200px',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '20px',
          }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </motion.div>
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
`;

function Members() {
  const { t } = useTranslation();
  return (
    <Div>
      <div
        style={{
          marginTop: '30px',
          marginBottom: '30px',
          fontSize: '50px',
          color: 'white',
          fontWeight: 900,
          fontFamily: `'Josefin Sans', sans-serif`,
          fontStyle: 'italic',
        }}
      >
        Members
      </div>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          width: '90%',
          justifyContent: 'center',
        }}
      >
        {members.map(({ name, image }) => (
          <Member name={t(`members.${name}`)} image={image} key={name} />
        ))}
      </div>
    </Div>
  );
}

export default Members;
