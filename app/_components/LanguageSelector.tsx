'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';

import { languages, Locale, locales } from '@/locales';
import { InfoStyle } from '@/theme/typography';
import { Flex } from '@/app/_components/common/Flex';
import { useParams } from 'next/navigation';

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
`;

const ActiveStyle = css`
  color: ${({ theme }) => theme.colors.typography.light};
`;

const StyledLink = styled(Link)<{ $isActive?: boolean }>`
  ${InfoStyle};
  color: ${({ theme }) => theme.colors.typography.tertiary};
  padding: ${({ theme }) => theme.spacings.s4}
    ${({ theme }) => theme.spacings.s16};
  ${({ $isActive }) => $isActive && ActiveStyle};
`;

export const LanguageSelector = () => {
  const { lang } = useParams<{ lang: Locale }>();
  return (
    <StyledLanguageSelector>
      <LanguageSelectorBox>
        {locales.map(locale => (
          <StyledLink $isActive={lang === locale} href={locale} key={locale}>
            {languages[locale]}
          </StyledLink>
        ))}
        {/*TODO show when console page is implemented */}
        {/*<StyledLink href="/console" locale={Locale.EN}>
          Console
        </StyledLink>*/}
      </LanguageSelectorBox>
    </StyledLanguageSelector>
  );
};
