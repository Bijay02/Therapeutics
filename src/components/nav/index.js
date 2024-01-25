import React, { useContext, useEffect } from "react";
import headerLogo from "../../images/global/muna-therapeutics-white-logo.svg";
import { Link } from "gatsby";
import { Context } from "../../redux/store";
import ClickAwayListener from "../custom/click-away-listener";
import navSchema from "./schema.json";
import { useLocation } from "@reach/router";


const getNav = (navList, parent) => {
  let navResult = navList.filter((item) => item.parentId === parent);
  console.log(navResult)
  return navResult;
}


const getNavChildren = (_parentId) =>
  _parentId ? navSchema.filter((_navItem) => _navItem.parentId === _parentId) : []


const Nav = () => {
  const location = useLocation()
  const { state, dispatch } = useContext(Context);
  const handleClose = () => {
    dispatch({ type: "SET_HAMBURGER_MENU", payload: false });
  };
  //   useEffect(() => {
  //     dispatch({ type: "SET_HAMBURGER_MENU", payload: false });
  //   }, [location.pathname, dispatch]);

  return (

    <nav className={`navbar ${state.hamburgerMenu ? "active" : ""}`}>
      <div className="navbar-nav">
        <div className="navbar-wrapper">
          <div className="mobile-logo">
            <Link to="/">
              <img
                src={headerLogo}
                alt="Muna Therapeutics logo"
                className="header-logo"
              />
            </Link>
          </div>
          <div className="close-btn__wrap">
            <button className="close-icon" onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.114"
                height="31.114"
                viewBox="0 0 31.114 31.114"
              >
                <g id="hamburger" transform="translate(-1264.943 -51.943)">
                  <g id="icon-hamburger">
                    <line
                      id="Line_419"
                      data-name="Line 419"
                      x1="36"
                      transform="translate(1267.771 54.772) rotate(45)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                    <line
                      id="Line_420"
                      data-name="Line 420"
                      x1="36"
                      transform="translate(1293.229 54.771) rotate(135)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
        {
          <ul className="level-1">
            {getNav(navSchema, null).map((item) => (
              <li key={item.navId}>
                <Link to={item.url}
                  dangerouslySetInnerHTML={{
                    __html: item.title,
                  }}
                  activeClassName="active"
                  partiallyActive={true}
                  onClick={handleClose}
                  target={item.target}
                />
                <SubNavigation _itemId={item.navId} />
              </li>
            ))}


          </ul>
        }
      </div>
    </nav>

  );
};

export default Nav;

function SubNavigation({ _itemId }) {
  return getNavChildren(_itemId) ? (
    <ul className="level-2">{
      getNavChildren(_itemId).map((item) => (
        <li key={item.navId}
          className={`sub-nav ${getNavChildren(item.navId) ? "add-border-bottom" : ""
            }`}
        >
          <Link to={item.url}
            dangerouslySetInnerHTML={{ __html: item.title }} activeClassName="active" partiallyActive={true} />
        </li>
      ))
    }</ul>
  ): null;
}
