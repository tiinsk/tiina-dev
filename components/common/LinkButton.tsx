import React from 'react';
import styled from 'styled-components';

import {
  ButtonContent,
  ButtonProps,
  ButtonStyle,
  ButtonVariant,
} from './Button';

export const StyledLinkButton = styled.a<{
  $variant: ButtonVariant;
}>`
  ${ButtonStyle};
`;

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type LinkButtonProps = ButtonProps &
  AnchorProps & {
    buttonRef?: React.Ref<HTMLAnchorElement>;
  };

export const LinkButton = ({
  variant = 'primary',
  text,
  iconLeft,
  iconRight,
  disabled,
  buttonRef,
  ...props
}: LinkButtonProps) => {
  return (
    <StyledLinkButton ref={buttonRef} $variant={variant} {...props}>
      <ButtonContent
        iconLeft={iconLeft}
        iconRight={iconRight}
        text={text}
        disabled={disabled}
      />
    </StyledLinkButton>
  );
};
