import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  margin-top: 5rem;
  margin-bottom: 5rem;
`;

function About() {
  return (
    <Div>
      <div
        style={{
          fontSize: '50px',
          color: 'white',
          fontWeight: 900,
          fontFamily: `'Josefin Sans', sans-serif`,
          fontStyle: 'italic',
        }}
      >
        About
      </div>
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
