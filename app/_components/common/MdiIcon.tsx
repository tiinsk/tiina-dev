import styled, { DefaultTheme, useTheme } from 'styled-components';

import * as mdiIcons from '@mdi/js';
import Icon from '@mdi/react';
import { Box, BoxProps } from './Box';
import { Space } from '@/theme';

export type IconColor = keyof DefaultTheme['colors']['typography'];
export type IconType = keyof typeof mdiIcons;

interface MdiIconProps {
  type: IconType;
  size?: Space;
  color?: IconColor;
}

const StyledIcon = styled(Icon)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const MdiIcon = ({
  type,
  color,
  size = 's24',
  ...props
}: MdiIconProps & BoxProps) => {
  const { spacings, colors } = useTheme();
  return (
    <Box {...props}>
      <StyledIcon
        size={spacings[size]}
        color={color && colors.typography[color]}
        path={mdiIcons[type]}
      />
    </Box>
  );
};
