import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Box, BoxProps } from './Box';
import {
  BodyStyle,
  H1Style,
  H2Style,
  InfoStyle,
  LabelStyle,
  SmallStyle,
  SubtitleStyle,
} from '../../theme/typography';
import { Space } from '../../theme';

export type TypographyColor = keyof DefaultTheme['colors']['typography'];

interface TypographyProps extends BoxProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  isLoading?: boolean;
  loadingWidth?: Space;
  color?: TypographyColor;
}

interface StyledTypographyProps {
  color?: TypographyColor;
}

const StyledTypography = styled(Box)<StyledTypographyProps>`
  color: ${({ theme, color }) =>
    theme.colors.typography[color ? color : 'primary']};
`;

const StyledH1 = styled(StyledTypography)<StyledTypographyProps>`
  ${H1Style};
`;

export const H1 = ({ children, color, ...props }: TypographyProps) => {
  return (
    <StyledH1 {...props} color={color} component="h1">
      {children}
    </StyledH1>
  );
};

const StyledH2 = styled(StyledTypography)<StyledTypographyProps>`
  ${H2Style};
`;

export const H2 = ({ children, color, ...props }: TypographyProps) => {
  return (
    <StyledH2 {...props} color={color} component="h2">
      {children}
    </StyledH2>
  );
};

const StyledSubtitle = styled(StyledTypography)<StyledTypographyProps>`
  ${SubtitleStyle};
`;

export const Subtitle = ({ children, color, ...props }: TypographyProps) => {
  return (
    <StyledSubtitle {...props} color={color} component="p">
      {children}
    </StyledSubtitle>
  );
};

const StyledInfo = styled(StyledTypography)<StyledTypographyProps>`
  ${InfoStyle};
`;

export const Info = ({ children, color, ...props }: TypographyProps) => {
  return (
    <StyledInfo {...props} color={color} component="span">
      {children}
    </StyledInfo>
  );
};

const StyledBody = styled(StyledTypography)<StyledTypographyProps>`
  ${BodyStyle};
`;

export const Body = ({ children, color, ...props }: TypographyProps) => {
  return (
    <StyledBody {...props} color={color} component="p">
      {children}
    </StyledBody>
  );
};

const StyledSmall = styled(StyledTypography)<StyledTypographyProps>`
  ${SmallStyle};
`;

export const Small = ({ children, color, ...props }: TypographyProps) => {
  return (
    <StyledSmall {...props} color={color} component="p">
      {children}
    </StyledSmall>
  );
};

const StyledLabel = styled(StyledTypography)<StyledTypographyProps>`
  ${LabelStyle};
`;

export const Label = ({ children, color, ...props }: TypographyProps) => {
  return (
    <StyledLabel {...props} color={color} component="label">
      {children}
    </StyledLabel>
  );
};
