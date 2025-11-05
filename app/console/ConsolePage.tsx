'use client';

import { Data } from '@/app/console/page';
import { CommandLine } from '@/app/_components/console/CommandLine';
import { useRef, useState } from 'react';
import { Typewriter } from '@/app/_components/console/Typewriter';
import styled from 'styled-components';
import { commandArray, Commands } from '@/app/console/commands';
import { Command, PrintCommand } from '@/app/_components/console/PrintCommand';
import { Locale, locales } from '@/locales';

const StyledConsoleSite = styled.div`
  min-height: 100dvh;

  color: ${({ theme }) => theme.colors.console.green};
  font-family: ${({ theme }) => theme.fonts.fontConsole};
  padding: ${({ theme }) => theme.spacings.s16}
    ${({ theme }) => theme.spacings.s8};
  padding-bottom: ${({ theme }) => theme.spacings.s16};

  font-size: 1.6rem;

  ::selection {
    background: ${({ theme }) => theme.colors.console.green};
    color: ${({ theme }) => theme.colors.console.background};
  }

  ::-moz-selection {
    background: ${({ theme }) => theme.colors.console.green};
    color: ${({ theme }) => theme.colors.console.background};
  }
`;

const PageContent = styled.div`
  max-width: ${({ theme }) => theme.pageWidth};
`;

const parseCommand = (command: string) => {
  const splitCommand = command.split(/\s+/);
  const mainCommand = splitCommand[0];

  if (
    splitCommand.length <= 3 &&
    commandArray.some(cmd => cmd === mainCommand)
  ) {
    const parsedCommand = {
      initialCommand: command,
      command: mainCommand as Commands,
      language: Locale.EN,
    };
    if (splitCommand.length === 1) {
      return parsedCommand;
    }
    if (
      splitCommand[1] === '-l' &&
      splitCommand[2] &&
      locales.some(lang => lang === splitCommand[2])
    ) {
      parsedCommand.language = splitCommand[2] as Locale;
      return parsedCommand;
    }
  }
  return {
    initialCommand: command,
    command: Commands.Error,
    language: Locale.EN,
  };
};

export const ConsolePage = ({ data }: { data: Data }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [commands, setCommands] = useState<Command[]>([]);

  const addCommand = (command: string) => {
    const parsed = parseCommand(command);
    setCommands(oldCommands => [...oldCommands, parsed]);
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <StyledConsoleSite onClick={() => focusInput()}>
      <PageContent>
        <Typewriter
          text={`Hi there and welcome. You should try typing "${Commands.Help}".`}
        />
        {commands.map((cmd, i) => {
          return <PrintCommand key={i} command={cmd} data={data} />;
        })}
        <CommandLine addCommand={addCommand} inputRef={inputRef} />
      </PageContent>
    </StyledConsoleSite>
  );
};
