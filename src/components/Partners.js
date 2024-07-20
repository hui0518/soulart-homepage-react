import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Partner({ name, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="card w-96"
      style={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        width: '200px',
        height: '300px',
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
            height: '200px',
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
`;

function Partners() {
  const { t } = useTranslation();
  return (
    <Div>
      <div
        style={{
          marginTop: '30px',
          marginBottom: '30px',
          fontWeight: 900,
          fontSize: '50px',
          color: 'white',
          fontFamily: `'Josefin Sans', sans-serif`,
          fontStyle: 'italic',
        }}
      >
        Partners
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
        {partners.map(({ name, image }) => (
          <Partner name={t(`partners.${name}`)} image={image} key={name} />
        ))}
      </div>
    </Div>
  );
}

export default Partners;
