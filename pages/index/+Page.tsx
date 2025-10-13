import { useData } from 'vike-react/useData';

import { Data } from './+data';

import { HeaderSection } from '../../components/sections/HeaderSection';
import { AboutMeSection } from '../../components/sections/AboutMeSection';
import { ContactSection } from '../../components/sections/ContactSection';
import { FactsSection } from '../../components/sections/FactsSection';
import { ProjectSection } from '../../components/sections/ProjectSection';
import { SkillSection } from '../../components/sections/SkillSection';
import { WorkHistorySection } from '../../components/sections/WorkHistorySection';
import { SectionContextProvider } from '../../contexts/section-context';
import { useRef } from 'react';

export default function Page() {
  const data = useData<Data>();
  const contactRef = useRef<HTMLElementTagNameMap['section'] | null>(null);

  const onScrollToContacts = () => {
    window.scrollTo({
      top: contactRef.current?.offsetTop,
      left: 0,
      behavior: 'auto',
    });
  };

  return (
    <>
      <HeaderSection data={data.header} />
      <AboutMeSection
        data={data.aboutMe}
        onScrollToContacts={() => onScrollToContacts()}
      />
      <SectionContextProvider>
        <FactsSection order={1} data={data.facts} />
        <WorkHistorySection order={2} data={data.workHistory} />
        <SkillSection order={3} data={data.skills} />
        <ProjectSection order={4} data={data.projects} />
        <ContactSection order={5} data={data.contact} ref={contactRef} />
      </SectionContextProvider>
    </>
  );
}
