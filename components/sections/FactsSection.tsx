import { FragmentOf, readFragment } from 'gql.tada';
import styled from 'styled-components';

import { graphql } from '../../datocms/graphql';
import { H2 } from '../common/typography';
import { Section } from '../common/Section';
import NotepadSvg from '../../assets/images/notes/notepad.svg';
import { FactFragment, FactItem } from '../facts/FactItem';

export const FactsFragment = graphql(
  `
    fragment FactsFragment on FactsSectionRecord {
      title
      backgroundColor {
        hex
      }
      factList {
        ...FactFragment
      }
    }
  `,
  [FactFragment]
);

const ContentContainer = styled.div`
  position: relative;
`;

const PostItContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  justify-items: center;
  grid-gap: ${({ theme }) => theme.spacings.s64};
  padding: 15%;
`;

const NotepadImage = styled.img`
  position: relative;
  width: 100%;
`;

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
      <ContentContainer>
        <NotepadImage src={NotepadSvg} />
        <PostItContainer>
          {factsData.factList.map((fact, index) => (
            <FactItem key={index} data={fact} />
          ))}
        </PostItContainer>
      </ContentContainer>
    </Section>
  );
};
