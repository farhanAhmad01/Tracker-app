export const LoginvalidateForm = (errors, loginData, setErrors) => {
  let isValid = true;
  const newErrors = { ...errors };

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!loginData.email.trim() || !emailRegex.test(loginData.email)) {
    newErrors.email = "Enter a valid email address";
    isValid = false;
  } else {
    newErrors.email = "";
  }

  // Validate password
  if (loginData.password.length < 8) {
    newErrors.password = "Password must be at least 8 characters";
    isValid = false;
  } else {
    newErrors.password = "";
  }
  setErrors(newErrors);
  return isValid;
};

export const SignupvalidateForm = (errors, signupData, setErrors) => {
  let isValid = true;
  const newErrors = { ...errors };

  // Validate name
  if (!signupData.name.trim() || signupData.name.length < 3) {
    newErrors.name = "Name is required and at least of 3 character";
    isValid = false;
  } else {
    newErrors.name = "";
  }

  // Validate username
  if (!signupData.username.trim()) {
    newErrors.username = "Username is required";
    isValid = false;
  } else {
    newErrors.username = "";
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!signupData.email.trim() || !emailRegex.test(signupData.email)) {
    newErrors.email = "Enter a valid email address";
    isValid = false;
  } else {
    newErrors.email = "";
  }

  // Validate password
  if (signupData.password.length < 8) {
    newErrors.password = "Password must be at least 8 characters";
    isValid = false;
  } else {
    newErrors.password = "";
  }

  setErrors(newErrors);
  return isValid;
};
