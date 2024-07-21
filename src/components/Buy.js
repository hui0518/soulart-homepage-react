import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  font-family: 'Noto Sans KR', sans-serif;
`;

function Buy() {
  const [t] = useTranslation();

  return (
    <Div id="buy">
      <div
        style={{
          color: 'white',
          fontSize: '50px',
          fontWeight: 900,
          fontFamily: `'Josefin Sans', sans-serif`,
          fontStyle: 'italic',
        }}
      >
        {t('title.buy')}
      </div>
      <img src="/assets/buy/elon.jpg" alt="melon" width="300px"></img>
      <h1>{t('buy.description')}</h1>
    </Div>
  );
}

export default Buy;
