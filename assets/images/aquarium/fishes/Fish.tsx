import styled, { useTheme } from 'styled-components';

import { VueFish } from './VueFish';
import { TypeScriptFish } from './TypeScriptFish';
import { ReactFish } from './ReactFish';
import { FigmaFish } from './FigmaFish';
import { JavascriptFish } from './JavascriptFish';
import { Space } from '../../../../theme';

export type FishVariant =
  | 'vue'
  | 'typescript'
  | 'react'
  | 'javascript'
  | 'figma';

export interface FishProps {
  variant: FishVariant;
  size?: Space;
  positionY: string;
  delayS?: number;
}

const getFishVariant = (variant: FishVariant) => {
  switch (variant) {
    case 'vue':
      return VueFish;
    case 'typescript':
      return TypeScriptFish;
    case 'react':
      return ReactFish;
    case 'figma':
      return FigmaFish;
    case 'javascript':
      return JavascriptFish;
  }
};

const FishBox = styled.div<{ $positionY: string; $delayS: number }>`
  @keyframes swim {
    0% {
      right: -25vw;
      transform: scaleX(1);
    }
    50% {
      right: 125vw;
      transform: scaleX(1);
    }
    51% {
      right: 125vw;
      transform: scaleX(-1);
    }
    99% {
      right: -25vw;
      transform: scaleX(-1);
    }
    100% {
      right: -25vw;
      transform: scaleX(1);
    }
  }

  position: absolute;
  top: ${({ $positionY }) => $positionY};
  right: -25vw;
  animation: 30s linear ${({ $delayS }) => $delayS}s infinite swim;
`;

export const Fish = ({
  variant,
  positionY,
  delayS = 0,
  size = 's96',
}: FishProps) => {
  const FishVariant = getFishVariant(variant);
  const { spacings } = useTheme();
  return (
    <FishBox $positionY={positionY} $delayS={delayS}>
      <FishVariant size={spacings[size]} />
    </FishBox>
  );
};
