import styled from 'styled-components';

type SectionProps = {
  children: React.ReactNode;
  bgColor?: string;
  isBgColorStatic?: boolean;
};

const StyledSection = styled.section<{ $bgColor?: string }>`
  padding-left: ${({ theme }) => theme.spacings.s128};
  padding-right: ${({ theme }) => theme.spacings.s64};
  padding-top: ${({ theme }) => theme.spacings.s128};
  padding-bottom: ${({ theme }) => theme.spacings.s80};

  background-color: ${({ $bgColor }) => $bgColor};
`;

export const Section = ({ children, bgColor }: SectionProps) => (
  <StyledSection $bgColor={bgColor}>{children}</StyledSection>
);
