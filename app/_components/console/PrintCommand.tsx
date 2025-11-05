import { ReactElement } from 'react';
import { readFragment } from 'gql.tada';
import styled from 'styled-components';

import AsciiFont from './AsciiFont';
import Contacts from './Contacts';
import Help from './Help';
import Introduction from './Introduction';
import Projects from './Projects';
import Skills from './Skills';
import WorkHistory from './WorkHistory';
import { Commands, printableCommands } from '@/app/console/commands';
import { Data } from '@/app/console/page';
import { Locale } from '@/locales';
import {
  AboutMeFragment,
  ContactFragment,
  ProjectsFragment,
  SkillFragment,
  WorkHistoryFragment,
} from '@/app/_components/sections/fragments';
import { MdiIcon } from '@/app/_components/common/MdiIcon';
import { Flex } from '@/app/_components/common/Flex';

export interface Command {
  initialCommand?: string;
  command: Commands;
  language?: Locale;
}

interface PrintCommandProps {
  command: Command;
  data: Data;
}

const StyledCommandTitle = styled.div`
  margin-top: ${({ theme }) => theme.spacings.s40};
`;

const renderCommand = (CommandBody: ReactElement, title?: string) => {
  return (
    <div>
      <div>
        {title && (
          <StyledCommandTitle>
            <AsciiFont text={title} />
          </StyledCommandTitle>
        )}
      </div>
      <div>{CommandBody}</div>
    </div>
  );
};

const getCommand = (command: Command, data: Data) => {
  const translatedData = data[command.language || Locale.EN];
  switch (command.command) {
    case Commands.Help:
      return {
        title: 'Help',
        commandBody: <Help />,
      };
    case Commands.AboutMe:
      const aboutData = readFragment(AboutMeFragment, translatedData.aboutMe);
      return {
        title: aboutData?.title,
        commandBody: <Introduction body={aboutData?.body || ''} />,
      };
    case Commands.WorkHistory:
      const workData = readFragment(
        WorkHistoryFragment,
        translatedData.workHistory
      );
      return {
        title: workData?.title,
        commandBody: <WorkHistory data={workData?.workHistoryList || []} />,
      };
    case Commands.Skills:
      const skillData = readFragment(SkillFragment, translatedData.skills);
      return {
        title: skillData?.title,
        commandBody: <Skills data={translatedData.skills} />,
      };
    case Commands.Projects:
      const projectData = readFragment(
        ProjectsFragment,
        translatedData.projects
      );
      return {
        title: projectData?.title,
        commandBody: <Projects data={translatedData.projects} />,
      };
    case Commands.Contacts:
      const contactData = readFragment(ContactFragment, translatedData.contact);
      return {
        title: contactData?.title,
        commandBody: <Contacts data={translatedData.contact} />,
      };
    default:
      return {
        commandBody: (
          <div style={{ margin: '1rem' }}>
            command not recognized, try typing "{Commands.Help}"
          </div>
        ),
      };
  }
};

export const PrintCommand = ({ command, data }: PrintCommandProps) => {
  let render;
  if (command.command === Commands.All) {
    render = (
      <>
        {printableCommands.map((cmd, i) => {
          const { title, commandBody } = getCommand(
            { command: cmd, language: command.language },
            data
          );
          return <div key={i}>{renderCommand(commandBody, title || '')}</div>;
        })}
      </>
    );
  } else {
    const { title, commandBody } = getCommand(command, data);

    render = renderCommand(commandBody, title || undefined);
  }

  return (
    <>
      {command.initialCommand && (
        <Flex alignItems="center" mt="s8">
          <MdiIcon type="mdiChevronRight" />
          {command.initialCommand}
        </Flex>
      )}
      {render}
    </>
  );
};
