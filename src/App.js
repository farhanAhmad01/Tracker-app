import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import { useDispatch } from "react-redux";
import { deleteTokenFromLocalStorage } from "./utils/jwt";
import { logoutUser } from "./slices/authSlice";
import Notification from "./components/Notification";
import { pushSuccessNotification } from "./utils/pushNotification";

const App = () => {
  useEffect(() => {
    pushSuccessNotification();
  }, []);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    deleteTokenFromLocalStorage();
    window.location.reload();
  };

  return (
    <div className="container">
      <Notification />
      <Router>
        <Routes>
          <Route path="/" element={<Home handleLogout={handleLogout} />} />
          <Route
            path="/login"
            element={<ProtectedRoute component={Login} name="login" />}
          />
          <Route
            path="/signup"
            element={<ProtectedRoute component={Signup} name="signup" />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                component={Dashboard}
                name="dashboard"
                handleLogout={handleLogout}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
