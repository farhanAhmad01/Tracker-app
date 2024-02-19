import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/authSlice";

const Home = ({ handleLogout }) => {
  const { user } = useSelector(selectUser);

  return (
    <div className="todoTracker">
      <h1>
        <span>T</span>odo <span>T</span>racker
      </h1>
      <p className="description">
        TodoTracker is a user-friendly and efficient application designed to
        help individuals organize their tasks seamlessly. Whether you're a
        student, professional, or someone who simply wants to stay organized,
        TodoTracker provides a user-centric platform for creating, managing, and
        tracking your to-do lists effortlessly.
      </p>

      <div className="buttonGroup">
        {user ? (
          <>
            <Button
              variant="outlined"
              style={{
                fontSize: "1.2rem",
                color: "orange",
                borderColor: "orange",
              }}
            >
              {" "}
              <Link to="/dashboard">Dashboard</Link>
            </Button>
            <Button
              variant="outlined"
              style={{
                fontSize: "1.2rem",
                color: "orange",
                borderColor: "orange",
                marginLeft: "2rem",
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              className="buttons "
              style={{ backgroundColor: "orange" }}
            >
              {" "}
              <Link to="/login">Login</Link>
            </Button>
            <Button
              variant="contained"
              className="buttons "
              style={{ marginLeft: "1.5rem", backgroundColor: "orange" }}
            >
              {" "}
              <Link to="/signup">Signup</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
