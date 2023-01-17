import { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import eye_close from "../../Assets/svg/eye-close.svg";
import eye_open from "../../Assets/svg/eye-open.svg";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const passInput = useRef();
  const userNameInput = useRef();
  const submitBtn = useRef();


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, []);

  
  
  const SubmitHandler = () => {
    fetch("http://54.248.131.197:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
          navigate("/dashboard");
        } else {
          setWrong(true);
          console.log("Password or username wrong");
        }
      })
      .catch((err) => {
        if (err.message === "Network request failed") {
          console.log("Network ");
        } else {
          console.log(err);
        }
      });
  };

  let isShowPassword = false;

  const showPassword = (e) => {
    isShowPassword = !isShowPassword;
    if (isShowPassword) {
      passInput.current.type = "text";
      e.target.src = eye_open;
    } else {
      passInput.current.type = "password";
      e.target.src = eye_close;
    }
  };

  return (
    <div className="login_wrapper">
      <div className="box-login">
        <h1 className="login_heading">Login</h1>
        <input
          ref={userNameInput}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="input-auth"
          type="text"
          placeholder="Username"
        />

        <div className="password_input">
          <input
            ref={passInput}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="input-auth"
            type="password"
            placeholder="Password"
          />
          <img
            onClick={(e) => showPassword(e)}
            src={eye_close}
            alt=""
            width="26"
            height="26"
          />
        </div>

        {wrong ? (
          <p className="alert-wrong">Wrong Password Or Username !!!..</p>
        ) : null}

        <button disabled ref={submitBtn} onClick={SubmitHandler} className="submit-btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
