import { useState, useEffect } from "react";
import ethereumLogo from "../images/weth.png";
import "./css/Welcome.scss";
const Welcome = () => {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  let isPortrait =
    windowDimenion.winWidth < 700 ||
    windowDimenion.winWidth < windowDimenion.winHeight
      ? true
      : false;

  let welcomeStyle = isPortrait
    ? "welcome-portrait-view"
    : "welcome-desktop-view";

  return (
    <div className={welcomeStyle}>
      <div className="welcome-left-side">
        <div className="welcome-left-side-container">
          <div className="welcome-heading">
            Send Crpto <br /> across the world
          </div>
          <div className="welcome-description">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypto.
          </div>
          <div className="table-container">
            <div className="table-row">
              <div className="table-1-1">Reliability</div>
              <div className="table-1-2">Security</div>
              <div className="table-1-3">Ethereum</div>
            </div>
            <div className="table-row">
              <div className="table-2-1">Web 3.0</div>
              <div className="table-2-2">Low Fees</div>
              <div className="table-2-3">Blockchain</div>
            </div>
          </div>
        </div>
      </div>
      <div className="welcome-right-side">
        <div className="welcome-ethereum-card">
          <div className="welcome-ethereum-top">
            <div className="welcome-ethereum-logo-container">
              <img
                src={ethereumLogo}
                alt="ethereumLogo"
                className="welcome-ethereum-logo"
              />
            </div>
            <div className="welcome-ethereum-card-info-container">
              <i className="fas fa-info"></i>
            </div>
          </div>
          <div className="welcome-ethereum-card-bottom">
            <div className="welcome-ethereum-card-address">adress</div>
            <div className="welcome-ethereum-card-label">Ethereum</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
