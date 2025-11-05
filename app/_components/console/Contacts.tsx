import React from 'react';
import styled from 'styled-components';
import { FragmentOf, readFragment } from 'gql.tada';
import { ContactFragment } from '@/app/_components/sections/fragments';
import { Link } from './Link';
import { DashedLineX, DashedLineY } from '@/app/_components/console/DashedLine';
import { Flex } from '@/app/_components/common/Flex';

export interface ContactsProps {
  data: FragmentOf<typeof ContactFragment> | null;
}

const StyledConsoleContacts = styled.div`
  width: fit-content;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-top: ${({ theme }) => theme.spacings.s16};
`;

const Detail = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.console.green};
`;

const StyledLink = styled(Link)`
  padding-left: ${({ theme }) => theme.spacings.s16};
  padding-right: ${({ theme }) => theme.spacings.s16};
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.console.white};
  padding-left: ${({ theme }) => theme.spacings.s16};
  padding-right: ${({ theme }) => theme.spacings.s16};
`;

const Contacts = ({ data }: ContactsProps) => {
  const contactsData = readFragment(ContactFragment, data);
  return (
    <StyledConsoleContacts>
      <Flex flexDirection="column" alignItems="center" gap="s4" mt="s2">
        +<DashedLineY />+
      </Flex>
      <Flex flexDirection="column" gap="s16" flexWrap="wrap" justifyContent="space-between">
        <Flex mt="s12" mx="s8">
          <DashedLineX />
        </Flex>
        {contactsData?.links.map(link => {
          return (
            <Detail key={link.url}>
              <Text>{link.title}</Text>
            </Detail>
          );
        })}
        {contactsData?.buttonLinks.map(link => {
          return (
            <Detail key={link.url}>
              <StyledLink
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.url}
              </StyledLink>
            </Detail>
          );
        })}
        <Flex mb="s8" mx="s8">
          <DashedLineX />
        </Flex>
      </Flex>
      <Flex flexDirection="column" alignItems="center" gap="s4" mt="s2">
        +<DashedLineY />+
      </Flex>
    </StyledConsoleContacts>
  );
};

export default Contacts;
