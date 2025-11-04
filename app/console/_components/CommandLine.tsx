import styled from 'styled-components';
import { MdiIcon } from '@/app/_components/common/MdiIcon';
import { RefObject, useState } from 'react';

const StyledConsoleCommandLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1rem;

  .line-icon {
    padding: 0 ${({ theme }) => theme.spacings.s8};
    /*font-size: ;*/

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input-line {
    flex-grow: 1;
    display: flex;
    align-items: center;
    position: relative;
    white-space: pre;
    z-index: 1;
    height: 22px;

    .cursor {
      height: 100%;
      width: 1rem;
      background-color: ${({ theme }) => theme.colors.console.green};
      display: inline-block;
      margin: 0 0.2rem;
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
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      height: 14px;
      line-height: 14px;
      .cursor {
        width: 7px;
      }
    }
  }
  .command-input {
    background: transparent;
    outline: none;
    position: fixed;
    bottom: 200vh;
    z-index: 0;
    color: transparent;
    pointer-events: none;
  }
`;

export const CommandLine = ({
  inputRef,
  addCommand,
}: {
  inputRef: RefObject<HTMLInputElement>;
  addCommand: (command: string) => void;
}) => {
  const [input, setInput] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);

  const keyDownHandler = (code: string) => {
    if (code === 'Enter') {
      //parseCommand(input);
      console.log('enter', input);
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
      <input
        className="command-input"
        id="command-input"
        ref={inputRef}
        onKeyDown={({ code }) => keyDownHandler(code)}
        value={input}
        onChange={({ target }) => {
          setInput(target.value);
          setCursorPosition(cursorPosition + 1);
        }}
      />
      <div className="input-line">
        <div>{input.slice(0, cursorPosition)}</div>
        <div className="cursor" />
        <div>{input.slice(cursorPosition)}</div>
      </div>
    </StyledConsoleCommandLine>
  );
};
