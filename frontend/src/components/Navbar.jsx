import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="h-12 bg-blue-500 flex justify-around items-center">
      <FontAwesomeIcon
        className="text-white "
        size="2xl"
        icon={faClipboardList}
      />

      <button className="bg-red-400 text-white px-2 py-0.5 rounded-sm">
        Logout
      </button>
    </div>
  );
}

export default Navbar;
