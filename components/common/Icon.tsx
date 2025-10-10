import styled, { useTheme } from 'styled-components';

import { Space } from '../../theme';
import { IconColor } from './MdiIcon';
import { Figma } from '../../assets/images/icons/Figma';
import { Cap } from '../../assets/images/icons/Cap';
import { Certificate } from '../../assets/images/icons/Certificate';
import { Box, BoxProps } from './Box';

export const customIcons = ['figma', 'teekkariCap', 'certificate'] as const;

export type CustomIconType = (typeof customIcons)[number];

export interface IconProps {
  type: CustomIconType;
  size?: Space;
  color?: IconColor;
}

const getIcon = (
  type: CustomIconType,
  size: string,
  color: string = 'currentColor'
) => {
  switch (type) {
    case 'figma':
      return <Figma size={size} color={color} />;
    case 'teekkariCap':
      return <Cap size={size} color={color} />;
    case 'certificate':
      return <Certificate size={size} color={color} />;
    default:
      return undefined;
  }
};

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = ({
  type,
  size = 's24',
  color,
  ...props
}: IconProps & BoxProps) => {
  const { colors, spacings } = useTheme();
  const icon = getIcon(type, spacings[size], color && colors.typography[color]);
  return (
    <Box {...props}>
      <StyledIcon>{icon}</StyledIcon>
    </Box>
  );
};
