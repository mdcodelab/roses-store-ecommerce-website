import React from 'react';

function Login() {
  return (
    <section className="register-container">
   
    <div className="register-wrapper">
    <h1 className="register-title">SIGN IN</h1>
        <form className="register-form">
            <input placeholder="Username" type="text"></input>
            <input placeholder="Password" type="password"></input>
            <button>LOGIN</button>
            <a href="#" className="forgot-password">Forgot password?</a>
            <a href="#" className="create-account">Create a new account</a>
        </form>
    </div>
      
    </section>
  );
}

export default Login;
