import React from 'react';
import styled from 'styled-components';
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

interface TypographyProps extends BoxProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  isLoading?: boolean;
  loadingWidth?: Space;
}

const StyledH1 = styled(Box)`
  ${H1Style};
`;

export const H1 = ({ children, ...props }: TypographyProps) => {
  return (
    <StyledH1 {...props} component="h1">
      {children}
    </StyledH1>
  );
};

const StyledH2 = styled(Box)`
  ${H2Style};
`;

export const H2 = ({ children, ...props }: TypographyProps) => {
  return (
    <StyledH2 {...props} component="h2">
      {children}
    </StyledH2>
  );
};

const StyledSubtitle = styled(Box)`
  ${SubtitleStyle};
`;

export const Subtitle = ({ children, ...props }: TypographyProps) => {
  return (
    <StyledSubtitle {...props} component="p">
      {children}
    </StyledSubtitle>
  );
};

const StyledInfo = styled(Box)`
  ${InfoStyle};
`;

export const Info = ({ children, ...props }: TypographyProps) => {
  return (
    <StyledInfo {...props} component="span">
      {children}
    </StyledInfo>
  );
};

const StyledBody = styled(Box)`
  ${BodyStyle};
`;

export const Body = ({ children, ...props }: TypographyProps) => {
  return (
    <StyledBody {...props} component="p">
      {children}
    </StyledBody>
  );
};

const StyledSmall = styled(Box)`
  ${SmallStyle};
`;

export const Small = ({ children, ...props }: TypographyProps) => {
  return (
    <StyledSmall {...props} component="p">
      {children}
    </StyledSmall>
  );
};

const StyledLabel = styled(Box)`
  ${LabelStyle};
`;

export const Label = ({ children, ...props }: TypographyProps) => {
  return (
    <StyledLabel {...props} component="label">
      {children}
    </StyledLabel>
  );
};
