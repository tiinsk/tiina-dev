export enum Commands {
  Help = 'help',
  All = 'all',
  AboutMe = 'aboutMe',
  WorkHistory = 'workHistory',
  Skills = 'skills',
  Projects = 'projects',
  Contacts = 'contacts',
  Error = 'error',
}

export const utilCommands = [Commands.Help, Commands.All, Commands.Error];
export const commandArray = Object.values(Commands);

export const printableCommands = commandArray.filter(
  cmd => !utilCommands.some(u => u === cmd)
);

export const commands = {
  AboutMe: 'aboutMe',
  WorkHistory: 'workHistory',
  Skills: 'skills',
  Projects: 'projects',
  Contacts: 'contacts',
};
