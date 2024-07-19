import styled from "styled-components";

const Div = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column;
  align-items: center;

  img {
    width: 90%;
    border-radius: 20px;
  }
`;

function Home() {
  return (
    <Div>
      <img
        src="/assets/home/soulart_station_cropped.png"
        alt="soulart station"
      ></img>
    </Div>
  );
}

export default Home;
