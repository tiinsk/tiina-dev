import React from 'react';
import styled from 'styled-components';
import { FragmentOf, readFragment } from 'gql.tada';
import { SkillFragment } from '@/app/_components/sections/fragments';

export interface SkillsProps {
  data: FragmentOf<typeof SkillFragment> | null;
}

const StyledConsoleSkills = styled.div`
  color: ${({ theme }) => theme.colors.console.grey};

  .title {
    color: ${({ theme }) => theme.colors.console.magenta};
    margin-bottom: 0.5rem;
  }
  .body {
    margin-bottom: 0.5rem;
  }
`;

const Skills = ({ data }: SkillsProps) => {
  const skillData = readFragment(SkillFragment, data);
  return (
    <StyledConsoleSkills>
      <div className="rateless-skills">
        <div className="title">{skillData?.techSkillTitle}</div>
        <div className="body">{skillData?.techSkillBody}</div>
        {skillData?.techSkills.map((skill, i) => {
          return (
            <div key={i} className="rateless-skill">
              <span className="line">/</span>
              {skill.name}
              <span className="line">/</span>
            </div>
          );
        })}
      </div>
      <div className="rateless-skills">
        <div className="title">{skillData?.designSkillTitle}</div>
        <div className="body">{skillData?.designSkillBody}</div>
        {skillData?.designSkills.map((skill, i) => {
          return (
            <div key={i} className="rateless-skill">
              <span className="line">/</span>
              {skill.name}
              <span className="line">/</span>
            </div>
          );
        })}
      </div>
      <div className="rateless-skills">
        <div className="title">{skillData?.coreSkillTitle}</div>
        <div className="body">{skillData?.coreSkillBody}</div>
        {skillData?.coreSkills.map((skill, i) => {
          return (
            <div key={i} className="rateless-skill">
              <span className="line">/</span>
              {skill.name}
              <span className="line">/</span>
            </div>
          );
        })}
      </div>
    </StyledConsoleSkills>
  );
};

export default Skills;
