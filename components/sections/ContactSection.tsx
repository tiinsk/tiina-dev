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
  order,
}: {
  data: FragmentOf<typeof ContactFragment> | null;
  order: number;
}) => {
  const contactData = readFragment(ContactFragment, data);

  if (!contactData) {
    return null;
  }

  return (
    <Section
      name="Contacts"
      bgColor={contactData.backgroundColor?.hex}
      order={order}
    >
      <H2>{contactData.title}</H2>
    </Section>
  );
};
