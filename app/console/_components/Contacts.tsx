import React from 'react';
import styled from 'styled-components';
import { FragmentOf, readFragment } from 'gql.tada';
import { ContactFragment } from '@/app/_components/sections/fragments';

export interface ContactsProps {
  data: FragmentOf<typeof ContactFragment> | null;
}

const StyledConsoleContacts = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.console.green};
  border-bottom: 2px solid ${({ theme }) => theme.colors.console.green};
  width: 450px;
  max-width: 100%;
  .detail {
    width: 450px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    color: white;
    span {
      color: ${({ theme }) => theme.colors.console.green};
    }
    a {
      color: ${({ theme }) => theme.colors.console.magenta};
    }
  }
`;

const divider = '//';

const Contacts = ({ data }: ContactsProps) => {
  const contactsData = readFragment(ContactFragment, data);
  return (
    <StyledConsoleContacts>
      <div className="detail">
        <span>{divider}</span>
        <span>{divider}</span>
      </div>
      {contactsData?.links.map(link => {
        return (
          <div key={link.url} className="detail">
            <span>{divider}</span>
            {link.title}
            <span>{divider}</span>
          </div>
        );
      })}
      <div className="detail">
        <span>{divider}</span>
        <span>{divider}</span>
      </div>
      {contactsData?.buttonLinks.map(link => {
        return (
          <div key={link.url} className="detail">
            <span>{divider}</span>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.url}
            </a>
            <span>{divider}</span>
          </div>
        );
      })}

      <div className="detail">
        <span>{divider}</span>
        <span>{divider}</span>
      </div>
    </StyledConsoleContacts>
  );
};

export default Contacts;
