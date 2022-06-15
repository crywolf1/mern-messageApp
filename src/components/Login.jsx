import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
const Login = () => {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="logo512.png" alt="whatsapp" />
        <div className="login__text">
          {" "}
          <h1>Sign in to Messaging App</h1>
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};
export default Login;
