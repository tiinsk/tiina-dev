import styled, { useTheme } from 'styled-components';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Cloud1 } from './Cloud1';
import { Cloud2 } from './Cloud2';
import { Cloud3 } from './Cloud3';
import { Space } from '../../../theme';
import throttle from 'lodash/throttle';

const TRANSFORM_MULTIPLIER = 0.2;

export type CloudVariant = 1 | 2 | 3;

export interface CloudProps {
  variant: CloudVariant;
  size?: Space;
  leftOffset?: string;
  topOffset?: string;
}

const getCloudVariant = (variant: CloudVariant) => {
  switch (variant) {
    case 1:
      return Cloud1;
    case 2:
      return Cloud2;
    case 3:
      return Cloud3;
    default:
      return Cloud1;
  }
};

const CloudBox = styled.div`
  position: absolute;
  z-index: 2;
`;

export const Cloud = ({
  variant,
  size = 's192',
  leftOffset = '0px',
  topOffset = '0px',
}: CloudProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offsetY, setOffsetY] = useState(0);
  const { spacings } = useTheme();

  const CloudVariant = getCloudVariant(variant);

  const onScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    const rectTop = ref.current?.getBoundingClientRect().top ?? 0;
    const viewportHeight = window.innerHeight;

    if (rectTop >= 0 && rectTop < viewportHeight) {
      const offset = viewportHeight - rectTop;
      setOffsetY(offset);
    }
    if (rectTop < 0) {
      setOffsetY(viewportHeight);
    }
  }, []);

  const throttledOnScroll = useCallback(throttle(onScroll, 3), [onScroll]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('scroll', throttledOnScroll);
    return () => {
      window.removeEventListener('scroll', throttledOnScroll);
    };
  }, [throttledOnScroll]);

  return (
    <CloudBox
      ref={ref}
      style={{
        left: `calc(${leftOffset} - ${offsetY * TRANSFORM_MULTIPLIER}px)`,
        top: `calc(50% + ${topOffset})`,
      }}
    >
      <CloudVariant size={spacings[size]} />
    </CloudBox>
  );
};
