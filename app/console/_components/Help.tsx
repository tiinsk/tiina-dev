import styled from 'styled-components';

import AsciiFont from './AsciiFont';
import {
  commandArray,
  Commands,
  utilCommands,
} from '@/app/console/_utils/commands';

const StyledConsoleHelp = styled.div`
  table {
    padding: 0 2rem;
    width: 100%;
  }
  .command-col {
    width: 24rem;
  }
`;

const Help = () => {
  const printableCommands = commandArray.filter(cmd => !utilCommands.some(u => u === cmd));
  return (
    <StyledConsoleHelp>
      <AsciiFont text="Help" />
      <table>
        <tbody>
          <tr>
            <td className="command-col">Usage:</td>
            <td>&lt;cmd&gt;</td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td className="command-col">where &lt;cmd&gt; is one of:</td>
            <td>
              {printableCommands.map(
                (cmd, i) => `${cmd}${i < printableCommands.length - 1 ? ', ' : ''}`
              )}
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td className="command-col">{Commands.All}</td>
            <td>Prints all commands listed above</td>
          </tr>
          <tr>
            <td className="command-col">{Commands.Help}</td>
            <td>Prints help</td>
          </tr>
          <tr>
            <td className="command-col">&lt;cmd&gt; -l fi|en</td>
            <td>Chooses language for command</td>
          </tr>
        </tbody>
      </table>
    </StyledConsoleHelp>
  );
};

export default Help;
