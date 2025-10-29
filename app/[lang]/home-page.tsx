'use client';

import { HeaderSection } from '@/app/_components/sections/HeaderSection';
import { AboutMeSection } from '@/app/_components/sections/AboutMeSection';
import { ContactSection } from '@/app/_components/sections/ContactSection';
import { ProjectSection } from '@/app/_components/sections/ProjectSection';
import { SkillSection } from '@/app/_components/sections/SkillSection';
import { WorkHistorySection } from '@/app/_components/sections/WorkHistorySection';
import { SectionContextProvider } from '@/app/_contexts/section-context';
import { useRef } from 'react';
import { Data } from '@/app/[lang]/page';

export const HomePage = ({ data }: { data: Data }) => {
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
        {/*Hide facts section for now (waiting for better design)*/}
        {/*<FactsSection order={1} data={data.facts} />*/}
        <WorkHistorySection order={1} data={data.workHistory} />
        <SkillSection order={2} data={data.skills} />
        <ProjectSection order={3} data={data.projects} />
        <ContactSection order={4} data={data.contact} ref={contactRef} />
      </SectionContextProvider>
    </>
  );
};
