import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { signinApi } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email cannot be empty!")
        .email("Invalid email!"),
      password: Yup.string()
        .required("Password cannot be empty!")
        .min(3, "Password must contain 3 to 32 characters!")
        .max(32, "Password must not container over 32 characters!"),
      // .matches(/cybersoft/, 'Password must include "cybersoft"!'),
    }),
    onSubmit: (values) => {
      console.log(values);
      // const action = signinApi(values);
      // dispatch(action);
    },
  });

  return (
    <form className="container p-5" onSubmit={formik.handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p className="m-0">Email</p>
        <input
          type="email"
          className="form-control w-50"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email ? (
          <p className="text-danger">{formik.errors.email}</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-group mt-3">
        <p className="m-0">Password</p>
        <input
          type="password"
          className="form-control w-50"
          id="password"
          name="password"
          onChange={formik.handleChange}
        />
        {formik.errors.password ? (
          <p className="text-danger">{formik.errors.password}</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success mt-3">
          Login
        </button>
      </div>
    </form>
  );
}
