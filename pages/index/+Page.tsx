import { useData } from 'vike-react/useData';

import { Data } from './+data';

import { HeaderSection } from '../../components/sections/HeaderSection';
import { AboutMeSection } from '../../components/sections/AboutMeSection';

export default function Page() {
  const data = useData<Data>();
  return (
    <>
      <HeaderSection data={data.header} />
      <AboutMeSection data={data.aboutMe}></AboutMeSection>
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
