import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-5">Login with</h2>
      <div className="space-y-2 *:w-full *:bg-base-100">
        <button className="btn">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
