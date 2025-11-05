import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StyledTypewriter = styled.div`
  margin-left: ${({ theme }) => theme.spacings.s8};
  margin-top: ${({ theme }) => theme.spacings.s8};
  min-height: ${({ theme }) => theme.spacings.s24};
`;

export const Typewriter = ({ text }: { text: string }) => {
  const [index, setIndex] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    addVisibleText();
    return () => {
      if (ref.current) {
        clearInterval(ref.current);
      }
    };
  }, []);

  const addVisibleText = () => {
    ref.current = window.setInterval(() => {
      setIndex(oldIndex => {
        if (oldIndex >= text.length && ref.current) clearInterval(ref.current);
        return oldIndex + 1;
      });
    }, 100);
  };

  return <StyledTypewriter>{text.slice(0, index)}</StyledTypewriter>;
};
