import React from 'react';
import styled from 'styled-components';
import { FragmentOf, readFragment } from 'gql.tada';
import { SkillFragment } from '@/app/_components/sections/fragments';
import { Skill } from './Skill';
import { Box } from '../common/Box';
import { Flex } from '../common/Flex';

export interface SkillsProps {
  data: FragmentOf<typeof SkillFragment> | null;
}

const SkillGroupTitle = styled.div`
  color: ${({ theme }) => theme.colors.console.magenta};
  margin-bottom: ${({ theme }) => theme.spacings.s8};
`;

const SkillGroupBody = styled.div`
  color: ${({ theme }) => theme.colors.console.grey};
  margin-bottom: ${({ theme }) => theme.spacings.s8};
`;

const Skills = ({ data }: SkillsProps) => {
  const skillData = readFragment(SkillFragment, data);
  return (
    <div>
      <Box mt="s24">
        <SkillGroupTitle>{skillData?.techSkillTitle}</SkillGroupTitle>
        <SkillGroupBody>{skillData?.techSkillBody}</SkillGroupBody>
        <Flex mt="s12" mb="s32" flexWrap="wrap">
          {skillData?.techSkills.map(skill => (
            <Skill text={skill.name} key={skill.name} />
          ))}
        </Flex>
      </Box>
      <Box>
        <SkillGroupTitle>{skillData?.designSkillTitle}</SkillGroupTitle>
        <SkillGroupBody>{skillData?.designSkillBody}</SkillGroupBody>
        <Flex my="s12" mb="s32" flexWrap="wrap">
          {skillData?.designSkills.map(skill => (
            <Skill text={skill.name} key={skill.name} />
          ))}
        </Flex>
      </Box>
      <Box>
        <SkillGroupTitle>{skillData?.coreSkillTitle}</SkillGroupTitle>
        <SkillGroupBody>{skillData?.coreSkillBody}</SkillGroupBody>
        <Flex my="s12" mb="s32" flexWrap="wrap">
          {skillData?.coreSkills.map(skill => (
            <Skill text={skill.name} key={skill.name} />
          ))}
        </Flex>
      </Box>
    </div>
  );
};

export default Skills;
