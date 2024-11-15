import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="card bg-base-100 max-w-lg shrink-0 mx-auto mt-14 p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <hr className="mt-12" />
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
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
              type="password"
              placeholder="password"
              className="input input-bordered rounded-none"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Dont’t Have An Account ?
          <Link className="text-red-500 ml-1" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
