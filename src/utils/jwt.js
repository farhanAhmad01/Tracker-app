export const setAuthToken = (payload) => {
  localStorage.setItem("todotracker", JSON.stringify(payload));
  console.log("auth token seted !!");
};

export const verifyToken = () => {
  const user = JSON.parse(localStorage.getItem("todotracker"));
  return user;
};

export const deleteTokenFromLocalStorage = () => {
  localStorage.removeItem("todotracker");
  console.log("logout ");
};
