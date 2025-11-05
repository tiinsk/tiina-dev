import styled from 'styled-components';

const StyledSvg = styled.svg``;

const BlinkingLine = styled.line`
  animation: blinker 1.5s steps(1, start) infinite;

  @keyframes blinker {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const CommandLine = () => {
  return (
    <StyledSvg
      width="35"
      height="100%"
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 23.3334L14.1667 16L5 8.66669"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <BlinkingLine
        x1="17.666"
        y1="24.3333"
        x2="32.3327"
        y2="24.3333"
        stroke="#1FC700"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </StyledSvg>
  );
};
