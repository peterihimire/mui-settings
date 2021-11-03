import React from "react";
import { Formik } from "formik";
import "./Login.css";
import LOGO from "../../../assets/images/Cloudtician Logo.svg";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory()
  const handleSubmit = ()=>{
    return history.push("/dashboard/home")
  }
  return (
    <>
      <div className='auth-wrapper'>
        <div className='welcome-message'>
          <img src={LOGO} alt='Cloudtician Logo' />
          <h2 className='welcome-title'>Welcome Back Admin!</h2>
          <p className='welcome-text'>
            Sign in to your cloudticians dashboard to access your content and
            drive the technological revolution to help people learn
          </p>
        </div>
        <div className='form-wrapper'>
          <div>
            <Formik
              initialValues={{ email: "", password: "" }}
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
              onSubmit={(values, { setSubmitting }) => {
                console.log("this is the beginning");
                return history.push("/dashboard/home")
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className='input-wrapper'>
                    <label className='auth-label'>Email</label>
                    <input
                      type='email'
                      name='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {/* <div className='auth-label'>{errors.email && touched.email && errors.email}</div> */}
                  </div>

                  <div className='input-wrapper'>
                    <label className='auth-label'>Password</label>
                    <input
                      type='password'
                      name='password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {/* <div className='auth-label'>{errors.password && touched.password && errors.password}</div> */}
                  </div>

                  <div className='button-wrapper'>
                    <button type='submit' disabled={isSubmitting} onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                  <div className='forget-password-link'>
                    <Link to='/forget-password'>forget password ?</Link>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
