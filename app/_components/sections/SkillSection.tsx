'use client';

import { FragmentOf, readFragment } from 'gql.tada';
import styled from 'styled-components';
import { H2 } from '../common/typography';
import { Section } from '../common/Section';
import { SkillList } from '../skills/SkillList';
import { SkillFragment } from '@/app/_components/sections/fragments';

const SkillSectionContainer = styled.div`
  display: flex;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: ${({ theme }) => theme.spacings.s24};
  }
`;

const IcebergGraphics = styled.div`
  display: flex;
  align-items: center;

  flex: 1 1 0;
  min-width: 0;
  margin-top: ${({ theme }) => theme.spacings.s32};

  @keyframes wave-movement {
    0% {
      transform: translateX(0px);
    }
    100% {
      //translateX amount must be same as the wave length. This way the wave looks like it's moving to right infinitely. If the translateX amount is not the same as the wave length, there will be wierd sudden in the end of the animation (100%->0%).
      transform: translateX(30vw);
    }
  }

  @keyframes wave-movement-sm {
    0% {
      transform: translateX(0px);
    }
    100% {
      //Mobile version of the wave has different width, so the translationX amount must be different.
      transform: translateX(60vw);
    }
  }

  @keyframes bob-movement {
    0% {
      transform: rotate(-5deg) translateY(0px);
    }
    100% {
      transform: rotate(5deg) translateY(-20px);
    }
  }

  padding-left: ${({ theme }) => theme.spacings.s128};

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 0;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    flex: 2 1 0;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 0 0 0;
  }
`;

const IcebergImg = styled.img`
  position: relative;
  max-height: 100%;
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: none;
    height: 80%;

    //Section padding left = 4.0rem
    transform: translateX(calc(-50% - ${({ theme }) => theme.spacings.s40}));
  }
`;

const WaterImg = styled.img`
  position: absolute;
  width: 150vw;
  left: -50vw;
  animation: wave-movement 7s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 300vw;
    left: -100vw;
    animation: wave-movement-sm 7s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
`;

const DuckImg = styled.img`
  height: ${({ theme }) => theme.spacings.s80};
  position: absolute;
  right: 10vw;
  top: 54%;
  transform-origin: center bottom;
  animation: bob-movement 4s ease-in-out alternate infinite;
`;

const BoatImg = styled.img`
  height: ${({ theme }) => theme.spacings.s64};
  position: absolute;
  left: 5vw;
  top: 54%;
  transform-origin: center bottom;
  animation: bob-movement 4s ease-in-out alternate infinite;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }
`;

const SkillTextContainer = styled.div`
  position: relative;

  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 0;
  min-width: 0;

  ${({ theme }) => theme.mediaQueries.md} {
    flex: 3 1 0;
  }
`;

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
      bgColor="skills"
      order={order}
      style={{ overflow: 'hidden' }}
    >
      <H2>{skillData.title}</H2>
      <SkillSectionContainer>
        <IcebergGraphics>
          <WaterImg
            src="/iceberg/water.svg"
            style={{
              top: '52%',
              animationDelay: '-4s',
              animationDuration: '13s',
            }}
          />
          <WaterImg
            src="/iceberg/water.svg"
            style={{
              top: '54%',
              animationDelay: '-5s',
              animationDuration: '20s',
            }}
          />
          <IcebergImg src="/iceberg/iceberg.svg" />
          <DuckImg src="/iceberg/duck.svg" />
          <BoatImg src="/iceberg/boat.svg" />
          <WaterImg
            src="/iceberg/water.svg"
            style={{
              top: '56%',
              animationDelay: '-2s',
              animationDuration: '7s',
            }}
          />
          <WaterImg
            src="/iceberg/water.svg"
            style={{
              top: '58%',
              animationDelay: '-3s',
              animationDuration: '10s',
            }}
          />
        </IcebergGraphics>
        <SkillTextContainer>
          <SkillList
            variant="tech"
            skillListTitle={skillData.skillListTitle}
            title={skillData.techSkillTitle}
            body={skillData.techSkillBody}
            skills={skillData.techSkills || []}
          />
          <SkillList
            variant="design"
            skillListTitle={skillData.skillListTitle}
            title={skillData.designSkillTitle}
            body={skillData.designSkillBody}
            skills={skillData.designSkills || []}
          />
          <SkillList
            variant="core"
            skillListTitle={skillData.skillListTitle}
            title={skillData.coreSkillTitle}
            body={skillData.coreSkillBody}
            skills={skillData.coreSkills || []}
          />
        </SkillTextContainer>
      </SkillSectionContainer>
    </Section>
  );
};
