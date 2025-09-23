import { languages, Locale, locales } from '../locales';
import { Link } from './common/Link';
import styled, { css } from 'styled-components';
import { Flex } from './common/Flex';
import { InfoStyle } from '../theme/typography';
import { usePageContext } from 'vike-react/usePageContext';

const StyledLanguageSelector = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacings.s16};
  display: flex;
  justify-content: flex-end;
`;

const ActiveStyle = css`
  background-color: ${({ theme }) => theme.colors.typography.primary};
  color: ${({ theme }) => theme.colors.typography.active};
`;

const StyledLink = styled(Link)<{ $isActive?: boolean }>`
  ${InfoStyle};
  color: ${({ theme }) => theme.colors.typography.tertiary};
  padding: ${({ theme }) => theme.spacings.s8}
    ${({ theme }) => theme.spacings.s16};
  ${({ $isActive }) => $isActive && ActiveStyle};
  border-radius: ${({ theme }) => theme.spacings.s24};
`;

export const LanguageSelector = () => {
  const pageContext = usePageContext();
  return (
    <StyledLanguageSelector>
      <Flex>
        {locales.map(locale => (
          <StyledLink
            $isActive={pageContext.locale === locale}
            locale={locale}
            href="/"
            key={locale}
          >
            {languages[locale]}
          </StyledLink>
        ))}
        <StyledLink href="/console" locale={Locale.EN}>
          Console
        </StyledLink>
      </Flex>
    </StyledLanguageSelector>
  );
};
