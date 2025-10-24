import { css } from 'styled-components';

export const H1Style = css`
  font-family: ${({ theme }) => theme.fonts.fontBody};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  font-size: 10rem;
  line-height: 15rem;
  letter-spacing: 0.1rem;

  ${({ theme }) => theme.mediaQueries.max} {
    font-size: 8rem;
    line-height: 12rem;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 6rem;
    line-height: 8rem;
  }
`;

export const H2Style = css`
  font-family: ${({ theme }) => theme.fonts.fontBody};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  font-size: 10rem;
  line-height: 14.4rem;
  letter-spacing: -0.15rem;
  margin-bottom: ${({ theme }) => theme.spacings.s80};

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 6rem;
    line-height: 8rem;
  }
`;

export const H3Style = css`
  font-family: ${({ theme }) => theme.fonts.fontBody};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  font-size: 7rem;
  line-height: 10.5rem;
  letter-spacing: -0.15rem;
  margin-bottom: ${({ theme }) => theme.spacings.s24};
`;

export const H4Style = css`
  font-family: ${({ theme }) => theme.fonts.fontBody};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: 2.8rem;
  line-height: 4.2rem;
`;

export const SubtitleStyle = css`
  font-family: ${({ theme }) => theme.fonts.fontBody};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 2.4rem;
  line-height: 3.6rem;
`;

export const InfoStyle = css`
  font-family: ${({ theme }) => theme.fonts.fontBody};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 2rem;
  line-height: 3.2rem;
`;

export const BodyStyle = css`
  font-family: ${({ theme }) => theme.fonts.fontBody};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

export const SmallStyle = css`
  font-family: ${({ theme }) => theme.fonts.fontBody};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 1.4rem;
  line-height: 1.8rem;
  letter-spacing: 0.04rem;
`;

export const SmallBoldStyle = css`
  ${SmallStyle};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const LabelStyle = css`
  font-family: ${({ theme }) => theme.fonts.fontBody};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 0.01rem;
  text-transform: uppercase;
`;
