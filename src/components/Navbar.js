import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import{BsArrowReturnRight} from 'react-icons/bs';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"><BsArrowReturnRight/> Home </Link>
        <Link to="/projects"><BsArrowReturnRight/> Projects </Link>
        <Link to="/experience"><BsArrowReturnRight/> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;
