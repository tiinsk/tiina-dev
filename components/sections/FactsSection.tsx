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
}: {
  data: FragmentOf<typeof FactsFragment> | null;
}) => {
  const factsData = readFragment(FactsFragment, data);

  if (!factsData) {
    return null;
  }

  return (
    <Section bgColor={factsData.backgroundColor?.hex}>
      <H2>{factsData.title}</H2>
    </Section>
  );
};
