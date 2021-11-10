import React from "react";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-elements">
          <Link to="/">
            <h1>Where in the world!</h1>
          </Link>
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
