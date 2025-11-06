'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';

import { languages, Locale, locales } from '@/locales';
import { InfoStyle } from '@/theme/typography';
import { Flex } from '@/app/_components/common/Flex';
import { useParams } from 'next/navigation';
import { CommandLine } from '@/app/_images/console/CommandLine';
import { Fragment } from 'react';

const StyledLanguageSelector = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacings.s16};
  display: flex;
  justify-content: flex-end;
`;

const LanguageSelectorBox = styled(Flex)`
  align-items: center;
  gap: ${({ theme }) => theme.spacings.s8};
`;

const ActiveStyle = css`
  color: ${({ theme }) => theme.colors.typography.light};
  background-color: ${({ theme }) => theme.colors.background.tertiary};
`;

const StyledLink = styled(Link)<{ $isActive?: boolean }>`
  ${InfoStyle};
  display: flex;

  color: ${({ theme }) => theme.colors.typography.tertiary};
  padding: ${({ theme }) => theme.spacings.s2}
    ${({ theme }) => theme.spacings.s16};
  border-radius: ${({ theme }) => theme.spacings.s24};
  ${({ $isActive }) => $isActive && ActiveStyle};
  transition: all 0.3s ease-out;

  &:hover {
    ${ActiveStyle};
  }
`;

const Line = styled.div`
  height: ${({ theme }) => theme.spacings.s16};
  width: 1.5px;
  background-color: ${({ theme }) => theme.colors.separator.primary};
`;

const StyledConsoleLink = styled(StyledLink)`
  padding: ${({ theme }) => theme.spacings.s2}
    ${({ theme }) => theme.spacings.s8};
`;

export const LanguageSelector = () => {
  const { lang } = useParams<{ lang: Locale }>();
  return (
    <StyledLanguageSelector>
      <LanguageSelectorBox>
        {locales.map(locale => (
          <Fragment key={locale}>
            <StyledLink $isActive={lang === locale} href={locale}>
              {languages[locale]}
            </StyledLink>
            <Line />
          </Fragment>
        ))}
        <StyledConsoleLink href="/console">
          <CommandLine />
        </StyledConsoleLink>
      </LanguageSelectorBox>
    </StyledLanguageSelector>
  );
};
