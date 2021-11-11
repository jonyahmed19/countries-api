import React, { useState } from "react";
import { FaRegMoon, FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  const [mode, setMode] = useState("light");
  const changeMode = () => {
    const body = document.querySelector("body");
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
    body.classList.toggle("dark-mode");
  };

  return (
    <header>
      <div className="container">
        <div className="header-elements">
          <Link to="/">
            <h1>Where in the world!</h1>
          </Link>
          <div className="mode">
            <button onClick={() => changeMode()}>
              {mode === "light" ? (
                <>
                  <span>
                    <FaRegMoon />
                  </span>
                  Dark Mode
                </>
              ) : (
                <>
                  <span>
                    <FaRegLightbulb />
                  </span>
                  Light Mode
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
