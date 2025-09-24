import { FragmentOf, readFragment } from 'gql.tada';

import { graphql } from '../../datocms/graphql';
import { H2 } from '../common/typography';
import { Section } from '../common/Section';

export const ProjectFragment = graphql(`
  fragment ProjectFragment on ProjectSectionRecord {
    title
    backgroundColor {
      hex
    }
  }
`);

export const ProjectSection = ({
  data,
}: {
  data: FragmentOf<typeof ProjectFragment> | null;
}) => {
  const projectData = readFragment(ProjectFragment, data);

  if (!projectData) {
    return null;
  }

  return (
    <Section bgColor={projectData.backgroundColor?.hex}>
      <H2>{projectData.title}</H2>
    </Section>
  );
};
