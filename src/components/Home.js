import classNames from "classnames";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-flow: column;
  align-items: center;

  .image {
    width: 90%;
    height: 80%;
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
    font-family: Arvo, sans-serif;
    font-weight: 400;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -100%);
    z-index: 5;
  }

  .scrolled {
    scale: 0.8;
  }
`;

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 10));

    const homeImage = document.getElementById("homeImage");
    homeImage.addEventListener("load", () => setLoaded(true));
  }, []);

  return (
    <Div>
      <div
        id="wrapper"
        className={classNames("image", { scrolled, "not-loaded": !loaded })}
      >
        <div id="mainText">
          Lorem Ipsum
          <br />
          Think Different
        </div>
        <img
          src="/assets/home/dark.jpg"
          alt="soulart station"
          id="homeImage"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </div>

      <div
        className={classNames("image", "skeleton", { "not-loaded": loaded })}
      />
    </Div>
  );
}

export default Home;
