import styled from 'styled-components';
import { Flex } from '@/app/_components/common/Flex';

const StyledDashedLineX = styled.svg`
  width: 500px;
  max-width: 100%;
  stroke: ${({ theme }) => theme.colors.console.green};
`;

export const DashedLineX = () => {
  return (
    <Flex>
      <StyledDashedLineX
        height="1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          y1="0.5"
          x2="100%"
          y2="0.5"
          stroke="inherit"
          strokeDasharray="7 3"
        />
      </StyledDashedLineX>
    </Flex>
  );
};

const StyledDashedLineY = styled.svg`
  height: 100%;
  stroke: ${({ theme }) => theme.colors.console.green};
  width: 1px;
  flex-grow: 1;
  flex-shrink: 0;
`;

export const DashedLineY = () => {
  return (
    <Flex>
      <StyledDashedLineY fill="none" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0.5"
          x2="0.5"
          y2="100%"
          stroke="inherit"
          strokeDasharray="7 3"
        />
      </StyledDashedLineY>
    </Flex>
  );
};
