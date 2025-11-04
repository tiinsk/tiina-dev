import React, { ReactElement } from 'react';

import AsciiFont from './AsciiFont';
import Contacts from './Contacts';
import Help from './Help';
import Introduction from './Introduction';
import Projects from './Projects';
import Skills from './Skills';
import WorkHistory from './WorkHistory';
import {
  commandArray,
  Commands,
  helpCommand,
  utilCommands,
} from '@/app/console/_utils/commands';
import { Data } from '@/app/console/page';
import { Locale } from '@/locales';
import { readFragment } from 'gql.tada';
import {
  AboutMeFragment,
  ContactFragment,
  ProjectsFragment,
  SkillFragment,
  WorkHistoryFragment,
} from '@/app/_components/sections/fragments';

export interface Command {
  command: Commands;
  language?: Locale;
}

interface PrintCommandProps {
  command: Command;
  data: Data;
}

const renderCommand = (CommandBody: ReactElement, title: string) => {
  return (
    <div>
      <AsciiFont text={title} />
      <div style={{ marginLeft: '1rem' }}>{CommandBody}</div>
    </div>
  );
};

const getCommand = (command: Command, data: Data) => {
  const translatedData = data[command.language || Locale.EN];
  switch (command.command) {
    case Commands.Help:
      return { commandBody: <Help /> };
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
            command not recognized, try typing "{helpCommand}"
          </div>
        ),
      };
  }
};

export const PrintCommand = ({ command, data }: PrintCommandProps) => {
  if (command.command === Commands.All) {
    const printableCommands = commandArray.filter(
      cmd => !utilCommands.some(u => u === cmd)
    );
    return (
      <div>
        {printableCommands.map((cmd, i) => {
          const { title, commandBody } = getCommand(
            { command: cmd, language: command.language },
            data
          );
          return <div key={i}>{renderCommand(commandBody, title || '')}</div>;
        })}
      </div>
    );
  }

  const { title, commandBody } = getCommand(command, data);

  return renderCommand(commandBody, title || '');
};
