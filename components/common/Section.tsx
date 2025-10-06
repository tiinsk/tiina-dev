import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  DEFAULT_COLOR_HEX,
  useSectionContext,
} from '../../contexts/section-context';

type SectionProps = {
  name: string;
  children: React.ReactNode;
  bgColor?: string;
  order: number;
};

export const BasicSection = styled.section<{ $bgColor?: string }>`
  padding-left: ${({ theme }) => theme.spacings.s128};
  padding-right: ${({ theme }) => theme.spacings.s64};
  padding-top: ${({ theme }) => theme.spacings.s128};
  padding-bottom: ${({ theme }) => theme.spacings.s80};

  background-color: ${({ $bgColor }) => $bgColor};
`;

export const StyledSection = styled(BasicSection)`
  position: relative;
  min-height: 100vh;
`;

export const Content = styled.div`
  max-width: ${({ theme }) => theme.pageWidth};
`;

export const Section = ({ name, children, bgColor, order }: SectionProps) => {
  const ref = useRef<HTMLElementTagNameMap['section'] | null>(null);

  const { addSection } = useSectionContext();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const el = ref.current;
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
    <StyledSection ref={ref}>
      <Content>{children}</Content>
    </StyledSection>
  );
};
