import { FragmentOf, readFragment } from 'gql.tada';

import { graphql } from '../../datocms/graphql';
import { H2 } from '../common/typography';
import { Section } from '../common/Section';

export const FactsFragment = graphql(`
  fragment FactsFragment on FactsSectionRecord {
    title
    backgroundColor {
      hex
    }
  }
`);

export const FactsSection = ({
  data,
  order,
}: {
  data: FragmentOf<typeof FactsFragment> | null;
  order: number;
}) => {
  const factsData = readFragment(FactsFragment, data);

  if (!factsData) {
    return null;
  }

  return (
    <Section
      name="Facts"
      bgColor={factsData.backgroundColor?.hex}
      order={order}
    >
      <H2>{factsData.title}</H2>
    </Section>
  );
};
