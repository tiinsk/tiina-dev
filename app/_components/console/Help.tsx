import styled from 'styled-components';

import { Commands, printableCommands } from '@/app/console/commands';

const StyledTable = styled.table`
  padding: ${({ theme }) => theme.spacings.s24};
  width: 100%;
`;

const StyledCmdCol = styled.td`
  width: ${({ theme }) => theme.spacings.s256};
`;

const Help = () => {
  return (
    <div>
      <StyledTable>
        <tbody>
          <tr>
            <StyledCmdCol>Usage:</StyledCmdCol>
            <td>&lt;cmd&gt;</td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <StyledCmdCol>where &lt;cmd&gt; is one of:</StyledCmdCol>
            <td>
              {printableCommands.map(
                (cmd, i) =>
                  `${cmd}${i < printableCommands.length - 1 ? ', ' : ''}`
              )}
            </td>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <StyledCmdCol>{Commands.All}</StyledCmdCol>
            <td>Prints all commands listed above</td>
          </tr>
          <tr>
            <StyledCmdCol>{Commands.Help}</StyledCmdCol>
            <td>Prints help</td>
          </tr>
          <tr>
            <StyledCmdCol>&lt;cmd&gt; -l fi|en</StyledCmdCol>
            <td>Chooses language for command</td>
          </tr>
        </tbody>
      </StyledTable>
    </div>
  );
};

export default Help;
