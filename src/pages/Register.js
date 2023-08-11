import React from 'react';

function Register() {
  return (
    <section className="register-container">
    <div className="register-wrapper">
    <h1 className="register-title">CREATE AN ACCOUNT</h1>
        <form className="register-form">
            <input placeholder="Name" type="text"></input>
            <input placeholder="Last Name" type="text"></input>
            <input placeholder="Username" type="text"></input>
            <input placeholder="Email" type="email"></input>
            <input placeholder="Password" type="password"></input>
            <input placeholder="Conform password" type="password"></input>
            <div className="agreement">
                <p>By creating an account, I consent to the processing of my personal data in accordance 
                with the <b>Privacy policy</b>.</p>
            </div>
            <button>CREATE</button>
        </form>
    </div>
      
    </section>
  );
}

export default Register;
