import React from "react";
import "./ForgotPassword.css";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import LOGO from "../../../assets/images/Cloudtician Logo.svg";

const ForgotPassword = () => {
  return (
    <div className='forget-password-wrapper'>
      <div className='forget-password-form'>
        <img src={LOGO} alt='Cloudtician Logo' />
        <h2 className='forget-password-title'>Forgot Password</h2>
        <div>
          <Formik
            initialValues={{ email: "" }}
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
                <div className='forget-password-input-wrapper'>
                  <label className='forget-password-input'>Email</label>
                  <input
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {/* <div className='auth-label'>{errors.email && touched.email && errors.email}</div> */}
                </div>

                <div className='forget-password-button-wrapper'>
                  <button type='submit' disabled={isSubmitting}>
                    Submit
                  </button>
                </div>
                <div className='forget-password-link'>
                  <Link to='/'>Back to Login</Link>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
