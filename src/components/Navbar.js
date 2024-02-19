import { Button } from "@material-ui/core";
import React from "react";

import { Link } from "react-router-dom";

const Navbar = ({ handleLogout }) => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <h2>TodoTracker</h2>
      </Link>
      <Button
        variant="outlined"
        style={{ fontSize: "1.2rem", color: "orange", borderColor: "orange" }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
