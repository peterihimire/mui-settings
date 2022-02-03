import { toast } from "react-toastify";

const typeConstraints = ["success", "info", "error"];

export const triggerToast = ({ type, msg, duration = "3000" }) => {
  const $isValidType = typeConstraints.some((v) => v === String(type));

  if ($isValidType) {
    toast[String(type).toLocaleLowerCase()](msg, {
      position: "top-right",
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  } else {
    throw new Error("Invalid type supplied.");
  }
};
