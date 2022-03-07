import React from "react";
import logo from "../../assets/images/doxy.png";

type Props = {};

export const LandingPage = (props: Props) => {
  return (
    <>
      <nav className="navbar sticky-top">
        <ul className="navbarLinks">
          <li className="navbarItem">
            <a href="">Home</a>
          </li>
          <li className="navbarItem">
            <a href="">The Project</a>
          </li>
          <li className="navbarItem">
            <a href="">Blog</a>
          </li>
          <li className="navbarItem">
            <button className="btn btn-outline-primary">Sign Up</button>
          </li>
        </ul>
      </nav>
      <section className="hero">
        <div className="container">
          <img src={logo} alt="" />
          <h1 className="mb-4">Introducing xBTC.</h1>
          <h3 className="mb-5">
            An algorithmically-backed stablecoin that's highly inflation
            resistant.
          </h3>
          <div className="buttons">
            <a
              href="https://github.com/FoundationCryptoLabs/XSS/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Github Project
            </a>
            <a
              href="https://github.com/FoundationCryptoLabs/XSS/blob/main/README.mdhttp://www,git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              Watch the video
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
