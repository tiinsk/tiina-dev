import { languages, locales } from '../locales';
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
  const pageContext = usePageContext();
  return (
    <StyledLanguageSelector>
      <LanguageSelectorBox>
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
        {/*TODO show when console page is implemented */}
        {/*<StyledLink href="/console" locale={Locale.EN}>
          Console
        </StyledLink>*/}
      </LanguageSelectorBox>
    </StyledLanguageSelector>
  );
};
