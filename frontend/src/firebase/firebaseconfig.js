// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCNFdXhpKdj5yjSjlJ9GwQI83gpYjKusHQ",
  authDomain: "taskmanager-486c5.firebaseapp.com",
  projectId: "taskmanager-486c5",
  storageBucket: "taskmanager-486c5.appspot.com",
  messagingSenderId: "103429210131",
  appId: "1:103429210131:web:5af67d30d404e82ec53fe6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
