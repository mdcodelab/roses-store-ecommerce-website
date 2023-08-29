import React from "react";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";

function Newsletter() {
  return (
    <Wrapper>
      <h1 className="title">Newsletter</h1>
      <p className="description">
        Get timely updates from your favorite products.
      </p>
      <form
        className="input-container"
        action="https://formspree.io/f/mbjvoylv"
      method="POST">
        <input type="email" name="email" placeholder="Your email ..." />
        <button type="submit">
          <SendIcon />
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 100%;
  height: 70vh;
  background-image: url("./images/intro.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;

  h1.title {
    font-size: 7rem;
    color: #fff;
    margin-bottom: 2rem;
    text-shadow: 0.2rem 0.7rem 1rem #333;
  }

  p.description {
    font-size: 2.4rem;
    font-weight: 300;
    color: #fff;
    margin-bottom: 2rem;
    text-shadow: 0.2rem 0.7rem 1rem rgba(0, 0, 0, 0.09); // Fixed this line
  }

  form.input-container {
    width: 40%;
    height: 7rem;
    display: flex;
    justify-content: center;
  }

  form.input-container input {
    border: none;
    font-size: 2rem;
    padding: 0.2rem;
    text-align: center;
    height: 50%;
    color: rgba(136, 8, 8, 1);
    border-radius: 0.5rem 0.5rem 0 0;
    outline: 0.1rem solid rgba(136, 8, 8, 1);
  }

  form.input-container input::placeholder {
    color: rgba(136, 8, 8, 1);
    font-size: 1.5rem;
    text-align: center;
  }

  form.input-container input:hover::placeholder {
    color: transparent;
  }

  form.input-container button {
    flex: 1;
    border: none;
    margin-left: 0.5rem;
    border-radius: 0 0 0.5rem 0.5rem;
    color: #fff;
    background-color: rgba(136, 8, 8, 1);
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }

  form.input-container button:hover {
    color: rgba(136, 8, 8, 1);
    background: #fff;
  }

  @media only screen and (max-width: 708px) {
    h1.title {
      font-size: 5rem;
    }
    p.description {
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: 600px) {
    h1.title {
      font-size: 4rem;
    }
    p.description {
      font-size:1.5rem;
    }
  }
`;

export default Newsletter;
