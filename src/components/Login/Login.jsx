import React from "react";
import "./Login.css";

import { auth, provider } from "../../firebase";

import Button from "@material-ui/core/Button";

import { actionTypes } from "../../contextApi/reducer";
import { useStateValue } from "../../contextApi/StateProvider";

const Login = () => {
  const [{ sessionId }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          payload: result.user,
        });

        console.log(result);
      })
      .catch((error) => alert(error.message));
  };

  const anonymousLogin = () => {
    dispatch({
      type: actionTypes.SET_USER,
      payload: {
        profilePic: "",
        username: "Anonymous User",
        email: "",
        displayName: "Anonymous User",
        photoURL: "",
      },
    });

    const randomSessionId = Math.floor(Math.random() * 1000);
    dispatch({
      type: actionTypes.SET_SESSIONID,
      payload: sessionId || randomSessionId,
    });
    !sessionId && sessionStorage.setItem("fb-clone-sessionId", randomSessionId);
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt=""
        />
        <img
          src="https://www.designportal.cz/wp-content/uploads/2019/11/facebook-logo-02.gif"
          alt=""
        />
      </div>
      <h2>Facebook Clone (Portfolio Project)</h2>
      <div>
        <Button className="login__SignIn" type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
        <Button type="submit" onClick={anonymousLogin}>
          Enter as Anonymous User
        </Button>
      </div>
      <h3>
        <i>
          This project utilizes Firebase. All trademarks, logos and brand names
          are the property of their respective owners.
        </i>
      </h3>
    </div>
  );
};

export default Login;
