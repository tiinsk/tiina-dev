'use client';

import { Data } from '@/app/console/page';
import { CommandLine } from '@/app/console/_components/CommandLine';
import { useEffect, useRef, useState } from 'react';
import GlobalStyle from '@/app/console/globalStyles';
import { Typewriter } from '@/app/console/_components/Typewriter';
import styled from 'styled-components';
import {
  commandArray,
  Commands,
  helpCommand,
} from '@/app/console/_utils/commands';
import { Command, PrintCommand } from '@/app/console/_components/PrintCommand';
import { Locale, locales } from '@/locales';

const StyledConsoleSite = styled.div`
  max-width: 1200px;
  min-height: 100vh;

  color: ${({ theme }) => theme.colors.console.green};
  font-family: ${({ theme }) => theme.fonts.fontConsole};
  padding: 2rem 1rem;
  padding-bottom: 2rem;

  font-size: 1.6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.0rem;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.console.green};
    color: white;
  }

  ::-moz-selection {
    background: ${({ theme }) => theme.colors.console.green};
    color: white;
  }
  
  a {
    text-transform: none;
    font-family: ${({ theme }) => theme.fonts.fontConsole};
    font-size: 1.6rem;
    &:hover {
      text-decoration: underline;
    }
  }
  
  .rateless-skills {
    display: flex;
    margin: 1rem 0;
    flex-wrap: wrap;
    .rateless-skill {
      color: white;
      margin-right: 1rem;
      .line {
        color: ${({ theme }) => theme.colors.console.magenta};
      }
      .asterix {
        color: ${({ theme }) => theme.colors.console.yellow};
      }
  }
`;

const parseCommand = (command: string) => {
  const splitCommand = command.split(/\s+/);
  const mainCommand = splitCommand[0];

  if (
    splitCommand.length <= 3 &&
    commandArray.some(cmd => cmd === mainCommand)
  ) {
    const command = {
      command: mainCommand as Commands,
      language: Locale.EN,
    };
    if (splitCommand.length === 1) {
      return command;
    }
    if (
      splitCommand[1] === '-l' &&
      splitCommand[2] &&
      locales.some(lang => lang === splitCommand[2])
    ) {
      command.language = splitCommand[2] as Locale;
      return command;
    }
  }

  return {
    command: Commands.Error,
    language: Locale.EN,
  };
};

export const ConsolePage = ({ data }: { data: Data }) => {
  const [commands, setCommands] = useState<Command[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const addCommand = (command: string) => {
    const parsed = parseCommand(command);
    setCommands(oldCommands => [...oldCommands, parsed]);
  };

  return (
    <StyledConsoleSite>
      <GlobalStyle />
      <Typewriter
        text={`Hi there and welcome. You should try typing "${helpCommand}".`}
      />
      {commands.map((cmd, i) => {
        return <PrintCommand key={i} command={cmd} data={data} />;
      })}
      <CommandLine inputRef={inputRef} addCommand={addCommand} />
    </StyledConsoleSite>
  );
};
