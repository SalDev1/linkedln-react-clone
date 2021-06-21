import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import "./styles/Login.css";

function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  const register = () => {
    if (!name) {
      alert("Please enter a full name!");
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic,
            })
          );
        })
        .catch((error) => {
          alert(error.message);
        });
    });
  };

  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://news.hitb.org/sites/default/files/styles/medium/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=ecA8o3uw"
        alt=""
      />
      <form className="login__input">
        <input
          value={name}
          type="text"
          placeholder="Full Name (required if registering)"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={profilePic}
          type="text"
          placeholder="Profile Pic URL (optional)"
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginToApp} type="submit">
          Sign In
        </button>
        <p>
          Not a member ?{" "}
          <span className="login__register" onClick={register}>
            Register Now
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
