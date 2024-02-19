import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { SignupvalidateForm } from "../utils/validation";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { SignupUser } from "../slices/authSlice";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [isNotFirstTime, setIsNotFirstTime] = useState(false);
  const dispatch = useDispatch()

  const onSubmissionHandle = () => {
    if (SignupvalidateForm(errors, signupData, setErrors)) {
      // Perform the signup logic
      dispatch(SignupUser({...signupData, userId : uuidv4(), createdAt: new Date()}))
      
    } 

    if (!isNotFirstTime) {
      setIsNotFirstTime(true);
    }
  };

  const handleChange = (name, value) => {
    setSignupData({
      ...signupData,
      [name]: value,
    })

    if (isNotFirstTime) {
      SignupvalidateForm(errors, { ...signupData, [name]: value }, setErrors);
    }
  };

  return (
    <div className="Form">
      <h1>Signup for TodoTracker</h1>
      <TextField
        label="Name"
        variant="outlined"
        className="input"
        value={signupData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        error={Boolean(errors.name)}
        helperText={errors.name}
      />
      <TextField
        label="Username"
        variant="outlined"
        className="input"
        style={{ margin: "2rem 0 2rem 0" }}
        value={signupData.username}
        onChange={(e) => handleChange("username", e.target.value)}
        error={Boolean(errors.username)}
        helperText={errors.username}
      />
      <TextField
        label="Email"
        variant="outlined"
        className="input"
        value={signupData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={Boolean(errors.email)}
        helperText={errors.email}
      />
      <TextField
        label="Password"
        variant="outlined"
        className="input"
        type="password"
        style={{ marginTop: "2rem" }}
        value={signupData.password}
        onChange={(e) => handleChange("password", e.target.value)}
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
        Signup
      </Button>
    </div>
  );
};

export default Signup;
