import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { LoginvalidateForm } from "../utils/validation";
import { useDispatch } from "react-redux";
import { LoginUser } from "../slices/authSlice";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "hayderaly@gmail.com",
    password: "12345678",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isNotFirstTime, setIsNotFirstTime] = useState(false);

  const dispatch = useDispatch();

  const onHandleChange = (name, value) => {
    setLoginData({
      ...loginData,
      [name]: value,
    });
    if (isNotFirstTime) {
      LoginvalidateForm(errors, loginData, setErrors);
    }
  };

  const onSubmissionHandle = () => {
    if (LoginvalidateForm(errors, loginData, setErrors)) {
      // Perform the login logic
      dispatch(LoginUser(loginData));
    }

    if (!isNotFirstTime) {
      setIsNotFirstTime(true);
    }
  };

  return (
    <div className="Form">
      <h1>Login for TodoTracker</h1>
      <TextField
        label="Email"
        variant="outlined"
        className="input"
        value={loginData.email}
        onChange={(e) => onHandleChange("email", e.target.value)}
        error={Boolean(errors.email)}
        helperText={errors.email}
      />
      <TextField
        label="Password"
        variant="outlined"
        className="input"
        style={{ marginTop: "2rem" }}
        type="password"
        value={loginData.password}
        onChange={(e) => onHandleChange("password", e.target.value)}
        error={Boolean(errors.password)}
        helperText={errors.password}
      />
      <Button
        variant="outlined"
        style={{
          marginTop: "2rem",
          padding: "1rem",
          color: "white",
          fontSize: "1.5rem",
        }}
        onClick={onSubmissionHandle}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
