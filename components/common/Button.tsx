import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

import { IconType, MdiIcon } from './MdiIcon';
import { Box } from './Box';
import { BodyStyle } from '../../theme/typography';

export type ButtonVariant = 'primary' | 'secondary';

const ButtonText = styled.span`
  ${BodyStyle};
`;

export const ButtonStyle = ({
  theme,
  $variant,
}: {
  theme: DefaultTheme;
  $variant: ButtonVariant;
}) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  transition: all 0.3s ease-out;

  padding: ${theme.spacings.s12} ${theme.spacings.s16};
  border-width: 1px;
  border-radius: ${theme.spacings.s8};
  border-style: solid;

  outline: none;

  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  background-color: ${({ theme }) =>
    theme.colors.buttons[$variant].background.default};
  color: ${({ theme }) => theme.colors.buttons[$variant].typography.default};
  border-color: ${({ theme }) => theme.colors.buttons[$variant].border.default};

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) =>
      theme.colors.buttons[$variant].background.hover};
    color: ${({ theme }) => theme.colors.buttons[$variant].typography.hover};
    border-color: ${({ theme }) => theme.colors.buttons[$variant].border.hover};
  }

  &:disabled {
    background-color: ${({ theme }) =>
      theme.colors.buttons[$variant].background.disabled};
    color: ${({ theme }) => theme.colors.buttons[$variant].typography.disabled};
    border-color: ${({ theme }) =>
      theme.colors.buttons[$variant].border.disabled};
  }
`;

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
}>`
  ${ButtonStyle};
`;

export interface ButtonProps {
  variant?: ButtonVariant;
  iconLeft?: IconType | React.ReactNode;
  text?: string;
  iconRight?: IconType | React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonRef?: React.Ref<HTMLButtonElement>;
  tabIndex?: number;
}

export const ButtonContent = ({ iconLeft, iconRight, text }: ButtonProps) => {
  return (
    <>
      {iconLeft && typeof iconLeft === 'string' && (
        <MdiIcon
          size={'s24'}
          type={iconLeft as IconType}
          mr={text ? 's12' : undefined}
        />
      )}
      {iconLeft && typeof iconLeft !== 'string' && (
        <Box mr={text ? 's12' : undefined}>{iconLeft}</Box>
      )}
      {text && <ButtonText>{text}</ButtonText>}
      {iconRight && typeof iconRight === 'string' && (
        <MdiIcon size={'s24'} type={iconRight as IconType} ml="s12" />
      )}
      {iconRight && typeof iconRight !== 'string' && (
        <Box ml="s12">{iconRight}</Box>
      )}
    </>
  );
};

export const Button = ({
  variant = 'primary',
  text,
  iconLeft,
  iconRight,
  disabled,
  onClick,
  buttonRef,
  tabIndex,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      disabled={disabled}
      onClick={onClick}
      ref={buttonRef}
      tabIndex={tabIndex}
      {...props}
    >
      <ButtonContent
        iconLeft={iconLeft}
        iconRight={iconRight}
        text={text}
        disabled={disabled}
      />
    </StyledButton>
  );
};
