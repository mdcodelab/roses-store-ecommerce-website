import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

function Login() {
  return (
    <section className="login-container">
      <div className="login-wrapper">
        <h1 className="register-title">LOGIN</h1>
        <form className="login-form">
          <input placeholder="username..." type="text"></input>
          <input placeholder="password..." type="password"></input>
          <button>LOGIN</button>
          <Link to="/*" className="forgot-password">
            Forgot password?
          </Link>
          <div>
            <Link to="/register" className="create-account">REGISTER</Link>
            <p>OR</p>
            <Link to="/">BACK HOME</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
