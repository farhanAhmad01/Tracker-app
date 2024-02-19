import todoTrackerAPI from "../api/api";
import { pushErrorNotification } from "../utils/pushNotification";

const userAlreadyExists = (users, data) => {
  const user = users.find((user) => user.email === data.email);

  return user;
};

const checkCredentials = (user, data) => {
  if (user.password === data.password) {
    return true;
  }
  return false;
};

const getAllUsers = async () => {
  const response = await todoTrackerAPI.get("/users");
  return response.data;
};

const signupUser = async (data) => {
  const users = await getAllUsers();
  const user = userAlreadyExists(users, data);

  if (user) {
    pushErrorNotification("Account Already Exist with this email !");
    return {
      error: "Account Already Exist with this email !",
    };
  }

  const response = await todoTrackerAPI.post("/users", data);

  return response.data;
};

const loginUser = async (data) => {
  const users = await getAllUsers();
  const user = userAlreadyExists(users, data);
  if (user) {
    if (checkCredentials(user, data)) {
      return user;
    }
    pushErrorNotification("Incorrect Password !!");
    return {
      error: "Incorrect Password !!",
      user: null,
    };
  }

  pushErrorNotification("User Doesn't have account with this email !");

  return {
    error: "User Doesn't have account with this email .",
    user: null,
  };
};

export const todoTrackerAuthServices = {
  signupUser,
  loginUser,
};
