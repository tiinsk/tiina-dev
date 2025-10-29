import React from 'react';
import styled from 'styled-components';

import {
  ButtonContent,
  ButtonProps,
  ButtonStyle,
  ButtonVariant,
} from './Button';
import { Locale } from '@/locales';
import Link from 'next/link';

export const StyledLinkButton = styled(Link)<{
  $variant: ButtonVariant;
}>`
  ${ButtonStyle};
`;

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type LinkButtonProps = ButtonProps &
  AnchorProps & {
    buttonRef?: React.Ref<HTMLAnchorElement>;
    isExternal?: boolean;
    locale?: Locale;
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
  locale,
  ...props
}: LinkButtonProps) => {

  if (!isExternal) {
    href = '/' + locale + href;
  }

  return (
    <StyledLinkButton ref={buttonRef} $variant={variant} href={href || '/'} passHref={isExternal} {...props}>
      <ButtonContent
        iconLeft={iconLeft}
        iconRight={iconRight}
        text={text}
        disabled={disabled}
      />
    </StyledLinkButton>
  );
};
