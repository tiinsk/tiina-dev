'use client';

import { FragmentOf, readFragment } from 'gql.tada';
import styled from 'styled-components';
import { H2 } from '../common/typography';
import { Section } from '../common/Section';
import NotepadSvg from '@/app/_images/notes/notepad.svg';
import { FactItem } from '../facts/FactItem';
import { FactsFragment } from '@/app/_components/sections/fragments';

const ContentContainer = styled.div`
  position: relative;
`;

const PostItContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  grid-gap: ${({ theme }) => theme.spacings.s16}
    ${({ theme }) => theme.spacings.s48};
  padding: 15%;
  padding-right: 10%;
  padding-left: 10%;
  padding-top: 10%;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 0;
    left: 0;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: auto;
    padding-left: 0;
    padding-top: 10rem;
    grid-gap: ${({ theme }) => theme.spacings.s48};
  }
`;

const NotepadImage = styled.img`
  position: absolute;
  height: 100%;
  width: auto;

  ${({ theme }) => theme.mediaQueries.sm} {
    left: -28vw;
  }
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
    <Section name="Facts" bgColor="facts" order={order}>
      <H2>{factsData.title}</H2>
      <ContentContainer>
        <NotepadImage src={NotepadSvg} />
        <PostItContainer>
          {factsData.factList.map((fact, index) => (
            <FactItem
              key={index}
              data={fact}
            />
          ))}
        </PostItContainer>
      </ContentContainer>
    </Section>
  );
};
