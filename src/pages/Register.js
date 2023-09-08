import React from 'react';
import {Link} from "react-router-dom";

function Register() {
  return (
    <section className="register-container">
    <div className="register-wrapper">
    <h1 className="register-title">CREATE AN ACCOUNT</h1>
        <form className="register-form">
            <input placeholder="username ..." type="text"></input>
            <input placeholder="email ..." type="email"></input>
            <input placeholder="password ..." type="password"></input>
            <div className="agreement">
                <p>By creating an account, I consent to the processing of my personal data in accordance 
                with the <b>Privacy policy</b>.</p>
            </div>
            <button>CREATE</button>
        </form>
        <div className="question">
          <p>Do you already have an account?</p>
          <Link to="/login">LOGIN</Link>
          <p>OR</p>
          <Link to="/">BACK HOME</Link>
        </div>

    </div>
      
    </section>
  );
}

export default Register;
