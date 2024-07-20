import { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column;
  align-items: center;

  height: 100vh;

  .image {
    width: 90%;
    height: 80%;
    object-fit: cover;
    border-radius: 20px;
    display: block;

    scale: 1;

    transition-property: scale;
    transition-duration: 0.75s;
    transition-timing-function: ease-in-out;
  }

  .not-loaded {
    display: none;
  }

  #mainText {
    transition-property: scale;
    transition-duration: 0.75s;
    transition-timing-function: ease-in-out;
  }

  .scrolled {
    scale: 0.8;
  }
`;

function Home() {
  const [scrolled, setScrolled] = useState(false);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const mainText = document.getElementById("mainText");
    window.addEventListener("scroll", () => {
      const a = window.scrollY;
      if (a > 10) {
        setScrolled(true);
        mainText.style.scale = "0.8";
      } else {
        setScrolled(false);
        mainText.style.scale = "1";
      }
    });

    const a = document.getElementById("homeImage");

    a.addEventListener("load", () => {
      setLoaded(true);
    });
  }, []);

  return (
    <Div>
      <div
        style={{
          fontFamily: "Arvo",
          fontWeight: 400,
          position: "absolute",
          left: "50%",
          top: "50%",
          zIndex: 5,
          transform: "translate(-50%, -100%)",
        }}
        id="mainText"
      >
        Lorem Ipsum
        <br />
        Think Different
      </div>
      <img
        src="/assets/home/dark.jpg"
        alt="soulart station"
        className={`image ${scrolled ? "scrolled" : ""} ${
          loaded ? "" : "not-loaded"
        }`}
        id="homeImage"
      />
      <div
        className={`image skeleton h-32 w-32 ${loaded ? "not-loaded" : ""}`}
      ></div>
    </Div>
  );
}

export default Home;
