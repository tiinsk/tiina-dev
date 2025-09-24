import { FragmentOf, readFragment } from 'gql.tada';

import { graphql } from '../../datocms/graphql';
import { H2 } from '../common/typography';
import { Section } from '../common/Section';

export const ContactFragment = graphql(`
  fragment ContactFragment on ContactSectionRecord {
    title
    backgroundColor {
      hex
    }
  }
`);

export const ContactSection = ({
  data,
}: {
  data: FragmentOf<typeof ContactFragment> | null;
}) => {
  const contactData = readFragment(ContactFragment, data);

  if (!contactData) {
    return null;
  }

  return (
    <Section bgColor={contactData.backgroundColor?.hex}>
      <H2>{contactData.title}</H2>
    </Section>
  );
};
