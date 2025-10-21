import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { blendColors, hex2rgb, RGBColor } from '../utils/color';
import throttle from 'lodash/throttle';

type Section = {
  name: string;
  bgColor: RGBColor;
  height: number;
  order: number;
};

export interface SectionContextType {
  sections: { [name: string]: Section | undefined };
  addSection: (
    name: string,
    data: { bgColorHex: string; height: number; order: number }
  ) => void;
  bgColor: RGBColor;
}

/* Returns y1 (top of the section) and y2 (bottom of the section) coordinates for each section.
 * y1 and y2 are relative to the top of the section group. If the section top is on top of the viewport y1 = 0 and the y2 = viewportH.
 */

const getSectionCoordinates = (
  sections: {
    [name: string]: Section | undefined;
  },
  sectionGroupTopY: number, // is 0 if on top of the viewport, <0 if above the viewport, >viewportH if below the viewport
  viewportH: number
) => {
  const orderedSection = Object.values(sections).sort((a, b) => {
    if (!a?.order) return 1;
    if (!b?.order) return -1;
    return a.order < b.order ? -1 : 1;
  });
  let sum = sectionGroupTopY;
  return orderedSection.map(section => {
    const top = sum;
    sum += section?.height || 0;

    const y1 = top;
    const y2 = sum;

    const maxY1 = Math.max(y1, 0);
    const minY2 = Math.min(y2, viewportH);

    //Percentage of the section visible in the viewport
    const ratio = (minY2 - maxY1) / viewportH;

    return {
      ...section,
      y1,
      y2,
      visibilityRatio: Number(ratio.toFixed(2)),
    };
  });
};

export const DEFAULT_COLOR = { r: 225, g: 225, b: 225 };
export const DEFAULT_COLOR_HEX = '#e1e1e1';

const SectionContext = createContext<SectionContextType>({
  sections: {},
  addSection: (_val, _val2) => {},
  bgColor: DEFAULT_COLOR,
});

export const SectionContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [sectionState, setSectionState] = useState<{
    [name: string]: Section | undefined;
  }>({});
  const [bgColorState, setBgColor] = useState<RGBColor>(DEFAULT_COLOR);

  const onScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight;

    const sectionCoordinates = getSectionCoordinates(
      sectionState,
      rect.top,
      viewportH
    );

    const visibleSections = sectionCoordinates.filter(
      section => section.visibilityRatio > 0
    );

    if (visibleSections.length === 0) setBgColor(DEFAULT_COLOR);
    else if (visibleSections.length === 1) {
      setBgColor(visibleSections[0].bgColor || DEFAULT_COLOR);
    } else {
      const newColor = blendColors(
        visibleSections[0].bgColor || DEFAULT_COLOR,
        visibleSections[0].visibilityRatio,
        visibleSections[1].bgColor || DEFAULT_COLOR,
        visibleSections[1].visibilityRatio
      );
      setBgColor(newColor);
    }
  }, [sectionState]);

  const throttledOnScroll = useCallback(throttle(onScroll, 100), [onScroll]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('scroll', throttledOnScroll);
    onScroll(); // Calculate initial background color
    return () => {
      window.removeEventListener('scroll', throttledOnScroll);
    };
  }, [throttledOnScroll]);

  const addSection = (
    name: string,
    section: { bgColorHex: string; height: number; order: number }
  ) => {
    const colorRGB = hex2rgb(section.bgColorHex);
    setSectionState(prevState => ({
      ...prevState,
      [name]: {
        name,
        bgColor: colorRGB,
        height: section.height,
        order: section.order,
      },
    }));
  };

  const contextValue = useMemo(
    () => ({
      sections: sectionState,
      bgColor: bgColorState,
      addSection,
    }),
    [sectionState, bgColorState]
  );

  return (
    <SectionContext.Provider value={contextValue}>
      <div
        ref={ref}
        style={{
          backgroundColor: `rgb(${bgColorState.r} , ${bgColorState.g}, ${bgColorState.b})`,
        }}
      >
        {children}
      </div>
    </SectionContext.Provider>
  );
};

export const useSectionContext = () => useContext(SectionContext);
