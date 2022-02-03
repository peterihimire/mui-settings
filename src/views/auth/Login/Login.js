import React from "react";
import { Form, Formik } from "formik";
import "./Login.css";
import LOGO from "../../../assets/images/Cloudtician Logo.svg";
import { Link } from "react-router-dom";
import { useLogin } from "./../../../query-client/mutations/index";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const { mutate, isLoading } = useLogin("/admin/auth/login");

  const handleLogin = async (values) => {
    mutate(values);
  };

  return (
    <>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="auth-wrapper">
        <div className="welcome-message-box">
          <div className="welcome-message">
            <img src={LOGO} alt="Cloudtician Logo" />
            <h2 className="welcome-title">Welcome Back Admin!</h2>
            <p className="welcome-text">
              Sign in to your cloudticians dashboard to access your content and
              drive the technological revolution to help people learn
            </p>
          </div>
        </div>
        <div className="form-wrapper">
          <div>
            <Formik
              initialValues={{
                email: "ayodimejifasina@gmail.com",
                password: "password",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                handleLogin(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                /* and other goodies */
              }) => (
                <Form>
                  <div className="input-wrapper">
                    <label className="auth-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <div className="auth-label">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>

                  <div className="input-wrapper">
                    <label className="auth-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <div className="auth-label">
                      {errors.password && touched.password && errors.password}
                    </div>
                  </div>

                  <div className="button-wrapper">
                    <button type="submit" disabled={isLoading}>
                      {isLoading ? "Logging In..." : "Submit"}
                    </button>
                  </div>
                  <div className="forget-password-link">
                    <Link to="/forget-password">forget password ?</Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
