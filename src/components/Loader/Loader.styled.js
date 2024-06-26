import styled, { keyframes } from "styled-components"


export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

export const LoaderLoading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`

const animation = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
`

export const LoaderBar = styled.div`
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #000;
  animation: ${animation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

  &:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  &:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  &:nth-child(3) {
    left: 56px;
    animation-delay: 0ms;
  }
`
