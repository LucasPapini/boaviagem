import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const WrapperBg = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: #270570d4;
  `}
`
export const RotatingCircle = styled.div`
  margin-top: 10px;
  border: 6px solid transparent;
  border-color: rgba(225, 43, 25, 0.9) rgba(225, 43, 25, 0.8)
    rgba(225, 43, 25, 0.7) rgba(225, 43, 25, 0.2);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 2s linear infinite;
`
