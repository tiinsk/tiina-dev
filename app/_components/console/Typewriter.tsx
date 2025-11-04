import { useEffect, useRef, useState } from 'react';

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

  return <div>{text.slice(0, index)}</div>;
};
