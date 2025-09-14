import React from 'react';
import styled from 'styled-components';

import { Counter } from './Counter.js';
import { useData } from 'vike-react/useData';
import { Data } from './+data';

const Title = styled.h1`
  color: #bf4f74;
`;

export default function Page() {
  const data = useData<Data>();
  return (
    <>
      <Title>My Vike app</Title>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      {data.contacts?.title}
      <ul>
        {data.contacts?.links.map(contact => (
          <li key={contact.title}>
            <a href={contact.url || undefined}>{contact.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
