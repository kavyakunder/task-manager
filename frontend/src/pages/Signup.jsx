import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../firebase/firebaseconfig";
import toast, { Toaster } from "react-hot-toast";

import { createUserWithEmailAndPassword } from "firebase/auth";
function Signup() {
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("e", e.target.email.value);

    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(database, email, password)
      .then((data) => {
        // console.log("dataa", data);
        // toast.success("Signup successful! Redirecting to tasks...");

        toast.success("Signup successful!", {
          duration: 3000, // Display toast for 5 seconds
          position: "top-center", // Show at the top-center
        });
        // history("/tasks");

        setTimeout(() => {
          history("/tasks");
        }, 1000);
      })
      .catch((err) => {
        console.log("error", err);
        toast.error("Signup failed"); // Show error toast
      });
  };
  return (
    <>
      <div>
        <nav className="flex justify-around h-14 bg-[#3273F5] items-center">
          <Link to="/tasks">
            <FontAwesomeIcon
              className="text-white "
              size="2xl"
              icon={faClipboardList}
            />
          </Link>

          <div className="flex gap-5">
            <Link to="/">
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

          <form
            className="border-2 border-[#3273F5] rounded-md flex flex-col items-center gap-3 mt-2"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="text-md p-0.5 w-10/12 border-2 border-gray-300 rounded-md mt-4"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="text-md p-0.5 w-10/12 border-2 border-gray-300 rounded-md"
            />
            <input
              // type="email"
              placeholder="Email"
              name="email"
              className="text-md p-0.5 w-10/12 border-2 border-gray-300 rounded-md"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="text-md p-0.5 w-10/12 border-2 border-gray-300 rounded-md"
            />
            <input
              type="password"
              name="confirm-password"
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
          </form>
        </main>
      </div>
      <Toaster />
    </>
  );
}

export default Signup;
