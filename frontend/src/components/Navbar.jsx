import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Navbar() {
  const { logoutFn } = useAuth();
  const handleLogout = async () => {
    await logoutFn();
  };
  return (
    <div className="h-12 bg-blue-500 flex justify-around items-center">
      <Link to="/tasks">
        <FontAwesomeIcon
          className="text-white "
          size="2xl"
          icon={faClipboardList}
        />
      </Link>

      {/* <Link to="/"> */}
      <button
        className="bg-red-400 text-white px-2 py-0.5 rounded-sm"
        onClick={handleLogout}
      >
        Logout
      </button>
      {/* </Link> */}
    </div>
  );
}

export default Navbar;
