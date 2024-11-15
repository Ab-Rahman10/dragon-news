import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, userUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  // state
  const [errorPassMessage, setErrorPassMessage] = useState();
  const [errorNameMessage, setErrorNameMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      return setErrorNameMessage("Name must be at least 5 characters long.");
    }
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log({ name, email, photo, password });

    // Validation
    if (password.length < 6) {
      return setErrorPassMessage("Password must be 6 characters long.");
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        // update profile
        userUpdateProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;

        console.log(errorMessage);
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="card bg-base-100 max-w-lg shrink-0 mx-auto mt-14 p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <hr className="mt-12" />
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered rounded-none"
              required
            />
            {errorNameMessage && (
              <span className="text-xs text-red-600">{errorNameMessage}</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo URL"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          {/* Email input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered rounded-none"
              required
            />
            {errorPassMessage && (
              <span className="text-xs text-red-600">{errorPassMessage}</span>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already Have An Account ?
          <Link className="text-red-500 ml-1" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
