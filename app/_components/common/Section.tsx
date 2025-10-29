'use client';

import React, { useEffect, useRef } from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';
import {
  DEFAULT_COLOR_HEX,
  useSectionContext,
} from '@/app/_contexts/section-context';

export type SectionColor =
  keyof DefaultTheme['colors']['background']['sections'];

type SectionProps = {
  name: string;
  children: React.ReactNode;
  forwardRef?: React.RefObject<HTMLElementTagNameMap['section']>;
  bgColor?: SectionColor;
  order: number;
  useMaxWidth?: boolean;
  style?: React.CSSProperties;
};

export const BasicSection = styled.section<{ $bgColor?: string }>`
  overflow-x: hidden;

  padding-left: ${({ theme }) => theme.pageMaxPaddingLeft};
  padding-right: ${({ theme }) => theme.pageMaxPaddingRight};
  padding-top: ${({ theme }) => theme.spacings.s128};
  padding-bottom: ${({ theme }) => theme.spacings.s80};

  background-color: ${({ $bgColor }) => $bgColor};

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: ${({ theme }) => theme.spacings.s48};
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: ${({ theme }) => theme.spacings.s24};
    padding-right: ${({ theme }) => theme.spacings.s24};
  }
`;

export const StyledSection = styled(BasicSection)`
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div<{ $useMaxWidth: boolean }>`
  max-width: ${({ theme, $useMaxWidth }) =>
    $useMaxWidth ? theme.pageWidth : 'none'};
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Section = ({
  name,
  children,
  bgColor,
  order,
  forwardRef,
  style,
  useMaxWidth = true,
}: SectionProps) => {
  const ref = useRef<HTMLElementTagNameMap['section'] | null>(null);
  const { colors } = useTheme();

  const { addSection } = useSectionContext();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const el = forwardRef?.current || ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const totalHeight = Math.max(1, rect.height);

    addSection(name, {
      bgColorHex: bgColor
        ? colors.background.sections[bgColor]
        : DEFAULT_COLOR_HEX,
      height: totalHeight,
      order,
    });
  }, [name]);

  return (
    <StyledSection ref={forwardRef || ref} style={style}>
      <Content $useMaxWidth={useMaxWidth}>{children}</Content>
    </StyledSection>
  );
};
