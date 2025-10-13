import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  DEFAULT_COLOR_HEX,
  useSectionContext,
} from '../../contexts/section-context';

type SectionProps = {
  name: string;
  children: React.ReactNode;
  forwardRef?: React.RefObject<HTMLElementTagNameMap['section'] | null>;
  bgColor?: string;
  order: number;
  useMaxWidth?: boolean;
};

export const BasicSection = styled.section<{ $bgColor?: string }>`
  padding-left: 10vw;
  padding-right: ${({ theme }) => theme.spacings.s64};
  padding-top: ${({ theme }) => theme.spacings.s128};
  padding-bottom: ${({ theme }) => theme.spacings.s80};

  background-color: ${({ $bgColor }) => $bgColor};

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 5vw;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: ${({ theme }) => theme.spacings.s40};
    padding-right: ${({ theme }) => theme.spacings.s40};
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
  useMaxWidth = true,
}: SectionProps) => {
  const ref = useRef<HTMLElementTagNameMap['section'] | null>(null);

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
      bgColorHex: bgColor || DEFAULT_COLOR_HEX,
      height: totalHeight,
      order,
    });
  }, [name]);

  return (
    <StyledSection ref={forwardRef || ref}>
      <Content $useMaxWidth={useMaxWidth}>{children}</Content>
    </StyledSection>
  );
};
