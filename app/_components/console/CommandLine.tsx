import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { MdiIcon } from '@/app/_components/common/MdiIcon';

const StyledConsoleCommandLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacings.s8};
`;

const StyledHiddenInput = styled.input`
  background: transparent;
  outline: none;
  position: fixed;
  bottom: 200vh;
  z-index: 0;
  color: transparent;
  pointer-events: none;
`;

const StyledInput = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  position: relative;
  white-space: pre;
  z-index: 1;
  height: ${({ theme }) => theme.spacings.s16};
`;

const StyledCursor = styled.div`
  height: ${({ theme }) => theme.spacings.s16};
  width: ${({ theme }) => theme.spacings.s8};
  background-color: ${({ theme }) => theme.colors.console.green};
  display: inline-block;
  margin: 0 ${({ theme }) => theme.spacings.s2};
  animation: blinker 1.5s steps(1, start) infinite;

  @keyframes blinker {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const CommandLine = ({
  addCommand,
  inputRef,
}: {
  addCommand: (command: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}) => {
  const [input, setInput] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);

  useEffect(() => {
    if (inputRef.current && window !== undefined) {
      inputRef.current.focus();
    }
  }, []);

  const keyDownHandler = (code: string) => {
    if (code === 'Enter') {
      addCommand(input);
      setInput('');
    }
    //back <-
    else if (code === 'ArrowLeft') {
      if (cursorPosition > 0) {
        setCursorPosition(cursorPosition - 1);
      }
    }
    //forward ->
    else if (code === 'ArrowRight') {
      if (cursorPosition < input.length) {
        setCursorPosition(cursorPosition + 1);
      }
    }
  };

  return (
    <StyledConsoleCommandLine>
      <MdiIcon type="mdiChevronRight" />
      <StyledHiddenInput
        id="command-input"
        ref={inputRef}
        autoFocus={true}
        onKeyDown={({ code }) => keyDownHandler(code)}
        value={input}
        onChange={({ target }) => {
          setInput(target.value);
          setCursorPosition(cursorPosition + 1);
        }}
      />
      <StyledInput>
        <span>{input.slice(0, cursorPosition)}</span>
        <StyledCursor />
        <span>{input.slice(cursorPosition)}</span>
      </StyledInput>
    </StyledConsoleCommandLine>
  );
};
