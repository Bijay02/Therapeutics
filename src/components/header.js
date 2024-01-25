import { Link } from "gatsby";
import React, { useContext, useEffect, useState } from "react";
import headerLogo from "../images/global/muna-therapeutics-logo.svg";
import { Context } from "../redux/store";
import Nav from "./nav";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  const { dispatch } = useContext(Context);
  const handleOpen = () => {
    dispatch({ type: "SET_HAMBURGER_MENU", payload: true });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header className={`site-header ${scroll ? "sticky" : ""}`}>
      <div className="centered-content-lg">
        <div className="site-header__content">
          <div className="logo">
            <Link to="/">
              <img
                src={headerLogo}
                alt="Muna Theurapatics logo"
                className="header-logo"
              />
            </Link>
          </div>

          <Nav />

          <div className="menu-icon">
            <div
              className="bar-wrap"
              tabIndex={0}
              onClick={handleOpen}
              onKeyDown={handleOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
