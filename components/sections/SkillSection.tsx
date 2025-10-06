import { FragmentOf, readFragment } from 'gql.tada';
import styled from 'styled-components';

import { graphql } from '../../datocms/graphql';
import { H2 } from '../common/typography';
import { Section } from '../common/Section';
import { SkillList } from '../skills/SkillList';
import { Flex } from '../common/Flex';
import IcebergSvg from '../../assets/images/iceberg/iceberg.svg';
import WaterSvg from '../../assets/images/iceberg/water.svg';
import BoatSvg from '../../assets/images/iceberg/boat.svg';
import DuckSvg from '../../assets/images/iceberg/duck.svg';

export const SkillFragment = graphql(`
  fragment SkillFragment on SkillSectionRecord {
    title
    skillListTitle
    techSkillTitle
    techSkillBody
    techSkills {
      name
      skillType
    }
    designSkillTitle
    designSkillBody
    designSkills {
      name
      skillType
    }
    coreSkillTitle
    coreSkillBody
    coreSkills {
      name
      skillType
    }
    backgroundColor {
      hex
    }
  }
`);

const IcebergGraphics = styled.div`
  padding-left: ${({ theme }) => theme.spacings.s128};

  @keyframes wave-movement {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(10vw);
    }
  }

  @keyframes float-movement {
    0% {
      transform: translateY(0) rotate(10deg);
      animation-timing-function: ease-in;
    }
    50% {
      transform: translateY(-50px) rotate(0deg);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translateY(0px) rotate(-10deg);
      animation-timing-function: ease-out;
    }
  }
`;

const IcebergImg = styled.img``;

const WaterImg = styled.img`
  position: absolute;
  left: -300px;
  bottom: 0;
  animation: 4s ease-in-out 0s infinite alternate wave-movement;
`;

const DuckImg = styled.img`
  height: ${({ theme }) => theme.spacings.s80};
  position: absolute;
  right: 100px;
  bottom: 522px;
  animation: 4s ease-out 0s infinite alternate float-movement;
`;
const BoatImg = styled.img`
  height: ${({ theme }) => theme.spacings.s64};
  position: absolute;
  left: 100px;
  bottom: 522px;
  animation: 4s ease-out 0s infinite alternate-reverse float-movement;
`;

//TODO make animation better and work with different screen sizes
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
      <Flex>
        <IcebergGraphics>
          <IcebergImg src={IcebergSvg} />
          <WaterImg src={WaterSvg} />
          <DuckImg src={DuckSvg} />
          <BoatImg src={BoatSvg} />
        </IcebergGraphics>
        <Flex flexDirection="column" ml="s80" alignItems="flex-start">
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
        </Flex>
      </Flex>
    </Section>
  );
};
