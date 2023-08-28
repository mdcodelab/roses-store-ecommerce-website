import React from 'react';
import styled from "styled-components";

function Video() {
  return (
    <Wrapper className="video-container">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/laA3LhO4hxQ?autoplay=1" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        title="Master Fluorist"
      ></iframe>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;      
  height: 0;
  padding-bottom: 35%;
  position: relative;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 2rem 0;
  }
`;


export default Video;
