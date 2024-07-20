import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

function Buy() {
  return (
    <Div>
      <img src="/assets/buy/elon.jpg" alt="melon" width="300px"></img>
      <h1>Buy Melon Musk</h1>
    </Div>
  );
}

export default Buy;
