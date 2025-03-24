import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignUp from "./components/SignUp";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

export default function App() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("auth") === "true";
  });

  useEffect(() => {
    localStorage.setItem("auth", isAuthenticated);
  }, [isAuthenticated]);

  function handleChanges(event) {
    event.preventDefault();
    setUserData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSignUp(event) {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      navigate("/signin");
      alert("User created successfully");
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSignIn(event) {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.password);
      setIsAuthenticated(true);
      navigate("/");
      alert("Sign In successfully");
    } catch (e) {
      console.log(e);
    }
  }

  function logout() {
    setIsAuthenticated(false);
    navigate("/signin");
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? <Home logout={logout} /> : <Navigate to="/signin" />
        }
      />
      <Route
        path="/signup"
        element={
          <SignUp handleChanges={handleChanges} handleSubmit={handleSignUp} />
        }
      />
      <Route
        path="/signin"
        element={
          <SignIn handleChanges={handleChanges} handleSubmit={handleSignIn} />
        }
      />
    </Routes>
  );
}
