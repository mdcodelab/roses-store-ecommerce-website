import React from 'react';
import styled from "styled-components";


function Announcement() {
  return (
    <Wrapper className="announcement-container">
      Super deal! Free shipping on orders over $50!
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height: 5rem;
    width: 100%;
    background-color: rgba(136, 8, 8, 1);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
  
`;

export default Announcement
