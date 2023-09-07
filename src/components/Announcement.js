import React from 'react';
import styled from "styled-components";


function Announcement() {
  return (
    <Wrapper className="announcement-container">
      <h3>Super deal! Free shipping on orders over $50!</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 5rem;
  width: 100%;
  background-color: rgba(136, 8, 8, 1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.5rem;
  font-weight: bold;

  h3 {
  width: 100%;
  white-space: nowrap;
  animation: move 10s linear infinite;

  @keyframes move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }

}
`;

export default Announcement
