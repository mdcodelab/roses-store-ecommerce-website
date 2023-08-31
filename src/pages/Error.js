import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

function Error() {
  return (
    <Wrapper>
        <div className="error-content">
        <h1>404</h1>
        <h2>...Ooops! Page not found.</h2>
        <Link to="/" className="button">Back Home</Link>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: url("images/error.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 1;
  position: relative;

  div.error-content {
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }

  div.error-content h1 {
    font-size: 5rem;
    text-align: center;
    margin-bottom: 2.5rem;
  }

  div.error-content h2 {
    color: #fff;
    margin-bottom: 2.5rem;
    letter-spacing: 0.2rem;
  }

  div.error-content a.button {
    width: 20rem;
    display: block;
    margin: 8rem auto 0;
    cursor: pointer;
    color: #fff;
    background: var(--heading-color);
    padding: 1rem 0;
    font-size: 2.5rem;
    border-radius: 1rem;
    border: 1px solid #fff;
    text-align: center;
    transition: all 0.5s ease;
  }

  div.error-content a.button:hover {
    color: var(--heading-color);
    background: #fff;
  }
`;

export default Error;