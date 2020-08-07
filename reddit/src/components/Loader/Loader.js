import React from 'react'

import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContent = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0); 
  border-top: 2px solid #0079d3;
  border-right: 2px solid #0079d3;
  border-bottom: 2px solid #0079d3;
  border-left: 4px solid white;
  background: transparent;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: inline-block;
  position: sticky;
  z-index: 100;
  margin-top: 30vh;
  -webkit-box-shadow: 0px 0px 42px -5px rgba(0,121,211,1);
  -moz-box-shadow: 0px 0px 42px -5px rgba(0,121,211,1);
  box-shadow: 0px 0px 42px -5px rgba(0,121,211,1);
`;

export default LoaderContent;


