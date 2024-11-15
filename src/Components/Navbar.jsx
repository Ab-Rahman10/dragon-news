import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="flex justify-between items-center">
      <div className="font-semibold">{user?.email}</div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex items-center gap-3">
        {user ? (
          <>
            <div className="font-semibold">{user?.displayName}</div>
            <div className="w-10">
              <img
                className="rounded-full"
                src={user?.photoURL}
                alt="User icon"
              />
            </div>
          </>
        ) : (
          <div className="w-10">
            <img src={UserIcon} alt="User icon" />
          </div>
        )}

        {user ? (
          <button
            onClick={handleLogOut}
            className="py-2 px-6 bg-gray-800 text-white rounded-none"
          >
            Sign OUt
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="py-2 px-6 bg-gray-800 text-white rounded-none"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
