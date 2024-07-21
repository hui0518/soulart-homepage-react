import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  font-family: 'Noto Sans KR', sans-serif;

  .title {
    color: white;
    font-size: 50px;
    font-weight: 900;
    font-family: 'Josefin Sans', 'Noto Sans KR', sans-serif;
    font-style: italic;
  }

  img {
    width: 300px;
  }
`;

function Buy() {
  const [t] = useTranslation();

  return (
    <Div id="buy">
      <div className="title">{t('title.buy')}</div>
      <img src="/assets/buy/elon.jpg" alt="melon" />
      <h1>{t('buy.description')}</h1>
    </Div>
  );
}

export default Buy;
