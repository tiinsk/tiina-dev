import styled from 'styled-components';

import {
  Body,
  Info,
  Small,
} from '../common/typography';
import { Tag, TagVariant } from '../common/Tag';
import { Flex } from '../common/Flex';

type SkillListVariant = 'tech' | 'core' | 'design';

export interface Skill {
  name: string;
  skillType: string;
}

const StyledSkillList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacings.s12};
`;

const getTagVariant = (skillType: string): TagVariant => {
  if (['tech', 'core', 'design'].includes(skillType))
    return skillType as TagVariant;
  return 'tech';
};

export const SkillList = ({
  variant,
  skillListTitle,
  title,
  body,
  skills,
}: {
  variant: SkillListVariant;
  skillListTitle: string;
  title: string;
  body: string;
  skills: Skill[];
}) => (
  <Flex flexDirection="column" gap="s16" m="s32">
    <Info color={variant}>{title}</Info>
    <Body>{body}</Body>
    <Small>{skillListTitle}</Small>
    <StyledSkillList>
      {skills.map((item, index) => (
        <Tag
          key={index}
          variant={getTagVariant(item.skillType)}
          text={item.name}
        />
      ))}
    </StyledSkillList>
  </Flex>
);
