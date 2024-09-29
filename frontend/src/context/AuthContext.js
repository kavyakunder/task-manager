import { useEffect, createContext, useContext, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { database } from "../firebase/firebaseconfig";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  //   const [isAuthenticated, setIsAuthenticated] = useState(false);

  //   const loginFn = () => setIsAuthenticated(true);
  //   const logoutFn = () => setIsAuthenticated(false);

  const logoutFn = () => {
    signOut(database);
  };
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(database, provider);
      return result; // This should contain the user information
    } catch (error) {
      console.error("Error in googleSignIn:", error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(database, (currentUser) => {
      console.log("hello", currentUser);
      setUser(currentUser); // Set to true if user exists
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logoutFn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
