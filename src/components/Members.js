import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

function Member({ name, image }) {
  return (
    <div
      className="card bg-base-100 w-96 shadow-xl"
      style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}
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
    </div>
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
          display: 'flex',
          flexFlow: 'row',
          width: '80%',
          height: '100vh',
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
