import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div>
      <nav className="flex justify-around h-14 bg-[#3273F5] items-center">
        <Link to="/">
          <FontAwesomeIcon
            className="text-white "
            size="2xl"
            icon={faClipboardList}
          />
        </Link>

        <div className="flex gap-5">
          <Link to="/login">
            <button className="text-white">Login</button>
          </Link>

          <Link to="/signup">
            <button className="bg-white  text-[#3273F5] rounded-md px-2">
              Signup
            </button>
          </Link>
        </div>
      </nav>
      <main className="w-1/4 text-center m-auto pb-5 mt-4">
        <h1 className="text-[#3273F5] text-2xl font-bold">Signup</h1>

        <div className="border-2 border-[#3273F5] rounded-md flex flex-col items-center gap-3 mt-2">
          <input
            type="text"
            placeholder="First Name"
            className="text-md p-0.5 w-10/12 border-2 border-gray-300 rounded-md mt-4"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="text-md p-0.5 w-10/12 border-2 border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="text-md p-0.5 w-10/12 border-2 border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-md p-0.5 w-10/12 border-2 border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="text-md p-0.5 w-10/12 border-2 border-gray-300 rounded-md"
          />
          <button className="bg-[#3273F5] w-10/12 p-1 rounded-md mt-2 text-white">
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span className="text-[#3273F5]">Login</span>
          </p>
          <button className="bg-[#3273F5] p-2 text-white rounded-md mb-5">
            Signup with Google
          </button>
        </div>
      </main>
    </div>
  );
}

export default Signup;
