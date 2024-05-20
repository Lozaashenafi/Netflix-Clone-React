import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
//import '../../../node_modules/bootstrap/dist/css/bootstrap.css.map'
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PortraitIcon from "@mui/icons-material/Portrait";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`nav ${show && "nav__black"}`}>
        <Link to="/">
          <img className="nav__logo" src={logo} alt="Netflix Logo" />
        </Link>
        <div className="nav-link">
          <li>Netflix</li>
          <li>Home</li>
          <li>TVShows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>MyList</li>
          <li>Browse by Languages</li>
        </div>
        <div className="nav-link icon">
          <SearchIcon />
          <NotificationsNoneIcon />
          <PortraitIcon />
          <ArrowDropDownIcon />
        </div>
      </div>
    </>
  );
}

export default Nav;
