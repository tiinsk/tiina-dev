import { useData } from 'vike-react/useData';

import { Data } from './+data';

import { HeaderSection } from '../../components/sections/HeaderSection';
import { AboutMeSection } from '../../components/sections/AboutMeSection';
import { ContactSection } from '../../components/sections/ContactSection';
import { FactsSection } from '../../components/sections/FactsSection';
import { ProjectSection } from '../../components/sections/ProjectSection';
import { SkillSection } from '../../components/sections/SkillSection';
import { WorkHistorySection } from '../../components/sections/WorkHistorySection';

export default function Page() {
  const data = useData<Data>();
  return (
    <>
      <HeaderSection data={data.header} />
      <AboutMeSection data={data.aboutMe} />
      <FactsSection data={data.facts} />
      <WorkHistorySection data={data.workHistory} />
      <SkillSection data={data.skills} />
      <ProjectSection data={data.projects} />
      <ContactSection data={data.contact} />
    </>
  );
}
