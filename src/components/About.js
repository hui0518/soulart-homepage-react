import styled from 'styled-components';

const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

function About() {
  return (
    <Div>
      <video
        src="/assets/about/video3.mp4"
        muted
        autoPlay
        loop
        width="600px"
      ></video>
    </Div>
  );
}

export default About;
