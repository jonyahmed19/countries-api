import React from "react";
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-elements">
          <a href="/">
            <h1>Where in the world!</h1>
          </a>
          <div className="mode">
            <button>
              <span>
                <FaRegMoon />
              </span>
              Dark Mode
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
