import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {
        console.log("Signed out");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          React-auth-context-private-route
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        <p className="normal-case text-xl">Welcome {user?.email}</p>
        <button
          onClick={handleSignOutUser}
          className="btn btn-ghost normal-case text-sm"
        >
          sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
