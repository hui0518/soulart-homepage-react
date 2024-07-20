import { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  .navbar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    z-index: 10;

    transition-duration: 0.4s;
    transition-property: background, border-radius, box-shadow, backdrop-filter,
      -webkit-backdrop-filter;
  }

  .scrolled {
    background: rgba(0, 0, 0, 0.28);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(13.7px);
    -webkit-backdrop-filter: blur(13.7px);
  }
`;

function Header() {
  const [cls, setCls] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 10 ? setCls("scrolled") : setCls("")
    );
  }, []);

  return (
    <Div>
      <div className={`navbar ${cls}`}>
        <div className="navbar-start">
          <img
            src="/assets/logo.png"
            width="100px"
            alt="company logo"
            style={{
              marginLeft: "20px",
              marginRight: "10px",
            }}
          ></img>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Members</a>
              </li>
              <li>
                <a>Partners</a>
              </li>
              <li>
                <a>Buy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className="menu menu-horizontal px-1"
            style={{ fontFamily: "Arvo", fontSize: "20px", fontWeight: "400" }}
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Members</a>
            </li>
            <li>
              <a>Partners</a>
            </li>
            <li>
              <a>Buy</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Lang</a>
        </div>
      </div>
    </Div>
  );
}

export default Header;
