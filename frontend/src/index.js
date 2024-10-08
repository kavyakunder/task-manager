import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
const root = ReactDOM.createRoot(document.getElementById("root"));

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/tasks",
      element: (
        <ProtectedRoute>
          <App />
        </ProtectedRoute>
      ),
    },
    { path: "/signup", element: <Signup /> },
  ]);

  return <RouterProvider router={router} />;
};

root.render(
  <React.StrictMode>
    <AuthProvider>
      {/* <App /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      <Router />
      {/* <RouterProvider router={router} /> */}
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
