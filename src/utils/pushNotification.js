import { toast } from "react-toastify";

const notification = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const pushErrorNotification = (message) => {
  toast.error(message, {
    ...notification,
  });
};

export const pushSuccessNotification = (message) => {
  toast.success(message, {
    ...notification,
  });
};
