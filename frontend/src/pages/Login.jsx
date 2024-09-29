import React, { useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { database } from "../firebase/firebaseconfig";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { googleSignIn, user } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log("dtaa", data);
        toast.success("Signup successful!", {
          duration: 3000,
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/tasks");
        }, 1000);
      })
      .catch((err) => {
        console.log("Err", err);
        toast.error("Login was unsuccessful!,Try again!");
      });
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await googleSignIn();

      if (response) {
        toast.success("Signup successful!", {
          duration: 3000,
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/tasks");
        }, 3000);
      }
    } catch (err) {
      toast.error("Login failed!");
      console.log("Err", err);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/tasks");
    }
  }, [user]);

  return (
    <>
      <div>
        <nav className="flex justify-around h-14 bg-[#3273F5] items-center ">
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
          <h1 className="text-[#3273F5] text-2xl font-bold">Login</h1>
          <div className="border-2 border-[#3273F5] rounded-md ">
            <form
              className="flex flex-col items-center gap-3 mt-4"
              onSubmit={(e) => handleLogin(e)}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="text-md p-0.5 w-10/12 border-2 border-gray-300 rounded-md mt-5"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="text-md p-0.5 w-10/12 border-2 border-gray-300 rounded-md"
              />

              <button className="bg-[#3273F5] w-10/12 p-1 rounded-md mt-2 text-white">
                Login
              </button>
              <p>
                Dont have an account?
                <Link to="/signup">
                  <span className="text-[#3273F5]">Signup</span>
                </Link>
              </p>
            </form>
            <button
              className="bg-[#3273F5] p-2 text-white rounded-md mb-5"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </button>
          </div>
        </main>
      </div>
      <Toaster />
    </>
  );
}

export default Login;
