import React from 'react';
import { useData } from 'vike-react/useData';

import { Data } from './+data';
import { LanguageSelector } from '../../components/LanguageSelector';

import { HeaderSection } from '../../components/sections/HeaderSection';

export default function Page() {
  const data = useData<Data>();
  return (
    <>
      <LanguageSelector />
      <HeaderSection data={data.header} />
      {/*{data.contacts?.title}
      <ul>
        {data.contacts?.links.map(contact => (
          <li key={contact.title}>
            <a href={contact.url || undefined}>{contact.title}</a>
          </li>
        ))}
      </ul>*/}
    </>
  );
}
