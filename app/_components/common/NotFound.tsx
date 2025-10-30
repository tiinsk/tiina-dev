'use client';

import { styled } from 'styled-components';
import { Subtitle, Body } from '@/app/_components/common/typography';
import { Flex } from '@/app/_components/common/Flex';

const StyledNotFound = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  height: ${({ theme }) => theme.spacings.s16};
  width: 1px;
  background-color: ${({ theme }) => theme.colors.typography.secondary};
`;

export const NotFound = ({
  code,
  message,
}: {
  code: string;
  message: string;
}) => {
  return (
    <StyledNotFound>
      <Flex gap="s32" alignItems="center">
        <Subtitle>{code}</Subtitle>
        <Line />
        <Body>{message}</Body>
      </Flex>
    </StyledNotFound>
  );
};
