'use client';

import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import debounce from 'lodash/debounce';

import { Road1 } from './Road1';
import { Road2 } from './Road2';
import { Road3 } from './Road3';
import { Road4 } from './Road4';

import { MobileRoad1 } from './mobile/MobileRoad1';
import { MobileRoad2 } from './mobile/MobileRoad2';
import { MobileRoad3 } from './mobile/MobileRoad3';
import { MobileRoad4 } from './mobile/MobileRoad4';

const ROAD_BOX_MAX_WIDTH = 280;
const SVG_WIDTH_MULTIPLIER = 2; // SVG width is 2x the width of the road box
const SVG_OFFSET = 80; // SVG is offset by 80px from the right of the road box
const SVG_ORIGINAL_VIEWBOX = 1000;
const FIRST_LAST_OFFSET = 80; // Some elements in the first and last road sections have offset of 80px so that it looks like the road is not cut off.

export type RoadVariant = 1 | 2 | 3 | 4;

export interface RoadProps {
  variant: RoadVariant;
  isFirst?: boolean;
  isLast?: boolean;
}

const getRoadVariant = (variant: RoadVariant) => {
  switch (variant) {
    case 1:
      return Road1;
    case 2:
      return Road2;
    case 3:
      return Road3;
    case 4:
      return Road4;
    default:
      return Road1;
  }
};

const getMobileRoadVariant = (variant: RoadVariant) => {
  switch (variant) {
    case 1:
      return MobileRoad1;
    case 2:
      return MobileRoad2;
    case 3:
      return MobileRoad3;
    case 4:
      return MobileRoad4;
    default:
      return MobileRoad1;
  }
};

const RoadBox = styled.div`
  width: 20vw;
  height: 100%;
  position: relative;
  max-width: ${ROAD_BOX_MAX_WIDTH}px;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 40vw;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100px;
  }
`;

export const StyledSvg = styled.svg<{ $isFirst?: boolean; $isLast?: boolean }>`
  position: absolute;
  top: 0;
  right: -${SVG_OFFSET}px;
  overflow: visible;

  width: ${SVG_WIDTH_MULTIPLIER * ROAD_BOX_MAX_WIDTH}px;
  z-index: 0;

  .bottom-road {
    display: ${({ $isLast }) => ($isLast ? 'block' : 'none')};
  }
  .bottom-land {
    display: ${({ $isLast }) => ($isLast ? 'block' : 'none')};
  }
  .top-road {
    display: ${({ $isFirst }) => ($isFirst ? 'block' : 'none')};
  }
  .top-land {
    display: ${({ $isFirst }) => ($isFirst ? 'block' : 'none')};
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }
`;

export const MobileStyledSvg = styled(StyledSvg)<{
  $isFirst?: boolean;
  $isLast?: boolean;
}>`
  right: -205px;

  display: none;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`;

export interface SVGDimensions {
  height: number; // SVG viewbox height (not the real height of the SVG)
  startY: number; // Start position of the SVG's road and land elements
  endY: number; // End position of the SVG's road and land elements
  endTransformY: number; // Some elements are moved from the original bottom of the SVG to the new bottom position of the SVG (Last road section's bottom road and land)
}

const defaultDimensions: SVGDimensions = {
  height: 0,
  startY: 0,
  endY: 0,
  endTransformY: 0,
};

export const Road = ({ variant, isFirst, isLast }: RoadProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [svgDimensions, setSvgDimensions] =
    useState<SVGDimensions>(defaultDimensions);

  const RoadVariant = getRoadVariant(variant);

  const MobileRoadVariant = getMobileRoadVariant(variant);

  const resizeSvg = () => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const height = rect.height;
    // Original SVG viewbox height is 1000, ration tells how much smaller/larger the calculated height is compared to the original viewbox height.
    const ratio =
      SVG_ORIGINAL_VIEWBOX / (SVG_WIDTH_MULTIPLIER * ROAD_BOX_MAX_WIDTH);
    //New SVG height. This is used only inside the SVG to determine position of SVG elements. SVG is always scaled to fit the parent container.
    const svgHeight = Math.round(height * ratio) + 1; // +1 for rounding error
    setSvgDimensions({
      height: svgHeight,
      startY: isFirst ? FIRST_LAST_OFFSET : 0,
      endY: isLast ? svgHeight - FIRST_LAST_OFFSET : svgHeight,
      endTransformY: -(SVG_ORIGINAL_VIEWBOX - svgHeight),
    });
  };

  const debouncedResizeListener = debounce(resizeSvg, 200);

  useEffect(() => {
    resizeSvg();

    if (ref.current) {
      window.addEventListener('resize', debouncedResizeListener);
    }

    return () => {
      window.removeEventListener('resize', debouncedResizeListener);
    };
  }, []);

  return (
    <RoadBox ref={ref}>
      <RoadVariant
        isFirst={isFirst}
        isLast={isLast}
        svgDimensions={svgDimensions}
      />
      <MobileRoadVariant
        isFirst={isFirst}
        isLast={isLast}
        svgDimensions={svgDimensions}
      />
    </RoadBox>
  );
};
