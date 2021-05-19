import React, { useEffect } from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  max-width: ${props => props.imgSize === "small" ? "19%" : props.imgSize === "medium" ? "32%" : props.imgSize === "large" ? "99%" : "400px"};
  max-height: ${props => props.imgSize === "small" ? "19%" : props.imgSize === "medium" ? "32%" : props.imgSize === "large" ? "99%" : "400px"};
  min-width: 300px;
  border-radius: 4px;
  cursor: ${props => props.pointer ? 'pointer' : 'default'};
  background: ${props => props.rejected ? "#da3f5e" : props.flagged ? "#f2c049" : ""};
  padding: 5px 0;

  img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 5px;
    opacity: ${props => props.rejected || props.flagged ? ".7" : "1"};
    vertical-align: middle;
  }
`;

 const Effect = ({ src, alt, rejected, flagged, pointer, onClick, imgSize }) => {

  // PRELOAD STATE
  useEffect(() => {
    new Promise((resolve) => {
      const img = document.createElement('img');
      img.src = src;
      img.onload = () => {
        img.remove();
        resolve();
      };
      img.style.display = 'none';
      img.style.width = '0px';
      img.style.height = '0px';
      document.body.appendChild(img);
    });
  }, [src])
  
  return (
    <Wrapper
      className='image-wrapper'
      pointer={pointer}
      rejected={rejected}
      flagged={flagged}
      onClick={onClick}
      imgSize={imgSize}
    >
      <img src={src} alt={alt} />
    </Wrapper>
  )
}
export default Effect
