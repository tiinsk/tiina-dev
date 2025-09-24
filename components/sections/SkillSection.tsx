import { FragmentOf, readFragment } from 'gql.tada';

import { graphql } from '../../datocms/graphql';
import { H2 } from '../common/typography';
import { Section } from '../common/Section';

export const SkillFragment = graphql(`
  fragment SkillFragment on SkillSectionRecord {
    title
    backgroundColor {
      hex
    }
  }
`);

export const SkillSection = ({
  data,
}: {
  data: FragmentOf<typeof SkillFragment> | null;
}) => {
  const skillData = readFragment(SkillFragment, data);

  if (!skillData) {
    return null;
  }

  return (
    <Section bgColor={skillData.backgroundColor?.hex}>
      <H2>{skillData.title}</H2>
    </Section>
  );
};
