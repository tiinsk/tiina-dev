import React from 'react';
import styled from 'styled-components';

import {
  ButtonContent,
  ButtonProps,
  ButtonStyle,
  ButtonVariant,
} from './Button';
import { usePageContext } from 'vike-react/usePageContext';
import { defaultLocale } from '../../locales';

export const StyledLinkButton = styled.a<{
  $variant: ButtonVariant;
}>`
  ${ButtonStyle};
`;

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type LinkButtonProps = ButtonProps &
  AnchorProps & {
    buttonRef?: React.Ref<HTMLAnchorElement>;
    isExternal?: boolean;
  };

export const LinkButton = ({
  variant = 'primary',
  text,
  iconLeft,
  iconRight,
  disabled,
  buttonRef,
  isExternal,
  href,
  ...props
}: LinkButtonProps) => {
  const pageContext = usePageContext();

  if (!isExternal && pageContext.locale !== defaultLocale) {
    href = '/' + pageContext.locale + href;
  }

  return (
    <StyledLinkButton ref={buttonRef} $variant={variant} href={href} {...props}>
      <ButtonContent
        iconLeft={iconLeft}
        iconRight={iconRight}
        text={text}
        disabled={disabled}
      />
    </StyledLinkButton>
  );
};
