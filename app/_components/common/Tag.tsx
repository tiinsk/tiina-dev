'use client';

import styled from 'styled-components';
import { Small } from './typography';

export type TagVariant = 'tech' | 'core' | 'design';
export type ColorVariant = 'light' | 'dark';

interface TagProps {
  variant?: TagVariant;
  colorVariant?: ColorVariant;
  text?: string;
}

const StyledTag = styled.div<{
  $variant: TagVariant;
  $colorVariant: ColorVariant;
}>`
  display: flex;
  align-items: center;

  padding: ${({ theme }) => theme.spacings.s4}
    ${({ theme }) => theme.spacings.s8};
  border-radius: ${({ theme }) => theme.spacings.s12};
  width: fit-content;

  color: ${({ theme }) => theme.colors.typography.secondary};

  white-space: nowrap;

  background-color: ${({ theme, $colorVariant }) =>
    $colorVariant === 'light'
      ? theme.colors.background.secondary
      : theme.colors.background.tertiary};
`;

export const Tag = ({
  variant = 'tech',
  text,
  colorVariant = 'light',
  ...props
}: TagProps) => {
  return (
    <StyledTag {...props} $variant={variant} $colorVariant={colorVariant}>
      <Small color={variant}>{text}</Small>
    </StyledTag>
  );
};
