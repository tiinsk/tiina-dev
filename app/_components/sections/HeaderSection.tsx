'use client';

import { FragmentOf, readFragment } from 'gql.tada';
import { H1, Info } from '../common/typography';
import styled from 'styled-components';
import { LanguageSelector } from '../LanguageSelector';
import { Background } from '@/app/_images/aquarium/Background';
import { Fish } from '@/app/_images/aquarium/fishes/Fish';
import { Fragments } from '@/app/_components/sections/fragments';

const StyledHeader = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 120vh;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s8};
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-left: ${({ theme }) => theme.spacings.s40};
  margin-right: ${({ theme }) => theme.spacings.s40};
  margin-bottom: ${({ theme }) => theme.spacings.s128};

  ${({ theme }) => theme.mediaQueries.md} {
    margin-left: ${({ theme }) => theme.spacings.s40};
    margin-right: ${({ theme }) => theme.spacings.s40};
  }
`;

export const HeaderSection = ({
  data,
}: {
  data: FragmentOf<typeof Fragments> | null;
}) => {
  const headerData = readFragment(Fragments, data);

  if (!headerData) {
    return null;
  }

  return (
    <StyledHeader>
      <div>
        <Background />
        <Fish variant="javascript" positionY="20%" delayS={-1} />
        <Fish variant="vue" positionY="30%" delayS={5} />
        <Fish variant="figma" positionY="40%" delayS={10} />
        <Fish variant="react" positionY="50%" delayS={15} />
        <Fish variant="typescript" positionY="60%" delayS={20} />
      </div>
      <ContentContainer>
        <LanguageSelector />
        <HeaderText>
          <H1 color="green">
            {headerData.title} {headerData.name}
          </H1>
          <Info color="tertiary">{headerData.subtitle}</Info>
        </HeaderText>
      </ContentContainer>
    </StyledHeader>
  );
};
