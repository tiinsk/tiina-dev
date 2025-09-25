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
  order,
}: {
  data: FragmentOf<typeof SkillFragment> | null;
  order: number;
}) => {
  const skillData = readFragment(SkillFragment, data);

  if (!skillData) {
    return null;
  }

  return (
    <Section
      name="Skills"
      bgColor={skillData.backgroundColor?.hex}
      order={order}
    >
      <H2>{skillData.title}</H2>
    </Section>
  );
};
