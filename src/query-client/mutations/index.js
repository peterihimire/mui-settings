import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { triggerToast } from "../../toast";
import { loginFn } from "../query-func";
import { useHistory } from "react-router-dom";

/* login in mutation */
export const useLogin = (path) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return useMutation(
    (payload) => loginFn({ path, payload, history, dispatch }),
    {
      onSuccess: async () => {
        triggerToast({
          type: "success",
          msg: "Login Successful!",
        });
      },
      onError: async (e) => {
        triggerToast({
          type: "error",
          msg: () => {
            if (e.response) {
              if (Boolean(e.response?.data?.message))
                return e.response?.data?.message;
            }
            return "Something Went Wrong";
          },
        });
      },
    }
  );
};
