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
  return (
    <Div>
      <div
        style={{
          color: 'white',
          fontSize: '50px',
          fontWeight: 900,
          fontFamily: `'Josefin Sans', sans-serif`,
          fontStyle: 'italic',
        }}
      >
        Buy Melon Musk
      </div>
      <img src="/assets/buy/elon.jpg" alt="melon" width="300px"></img>
      <h1>Buy Melon Musk</h1>
    </Div>
  );
}

export default Buy;
