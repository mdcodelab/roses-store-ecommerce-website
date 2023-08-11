import React from 'react';
import SendIcon from '@mui/icons-material/Send';



function Newsletter() {
  return (
    <section className="newsletter-container">
            <h1 className="title">Newsletter</h1>
            <p className="description">Get timely updates from your favorite products.</p>
            <form className="input-container">
                <input type='email' placeholder="Your email"></input>
                <button><SendIcon></SendIcon></button>
            </form>
      
    </section>
  );
}

export default Newsletter;
