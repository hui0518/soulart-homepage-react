import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Div = styled.div`
  margin-top: 200px;
  margin-bottom: 200px;

  display: flex;
  flex-flow: column;
  align-items: center;

  .title {
    color: white;
    font-size: 50px;
    font-weight: 900;
    font-family: 'Josefin Sans', 'Noto Sans KR', sans-serif;
    font-style: italic;
    margin-bottom: 50px;
  }

  .description {
    font-family: 'Noto Sans KR', sans-serif;
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
      <h1 className="description">{t('buy.description')}</h1>
    </Div>
  );
}

export default Buy;
