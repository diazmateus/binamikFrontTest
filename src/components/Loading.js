import styled, { keyframes } from "styled-components";

const rotateinfinite = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
  }
  100%  {
    -webkit-transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  animation: ${rotateinfinite} .8s linear infinite;
  -webkit-animation: ${rotateinfinite} .8s linear infinite;
  border: 12px solid #fff;
  border-right-color: transparent;
  border-radius: 50%;
  display: inline-block;
  height: 100px;
  width: 100px;
`;

export default Loading;
