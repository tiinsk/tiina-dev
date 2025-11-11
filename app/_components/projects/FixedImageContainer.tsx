import styled from 'styled-components';
import Image from 'next/image';

import { useProjectContext } from '@/app/_contexts/project-context';

const StyledFixedImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacings.s128};
  margin-left: 50%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-right: ${({ theme }) => theme.spacings.s40};
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  aspect-ratio: 1 / 1;
  width: 100%;
  height: auto;
`;

export const FixedImageContainer = () => {
  const { projects, visibleProject } = useProjectContext();

  return (
    <StyledFixedImageContainer
      style={{ display: visibleProject.name !== undefined ? 'flex' : 'none' }}
    >
      {Object.values(projects)
        .sort((a, b) => ((a?.initialY1 || 0) > (b?.initialY1 || 0) ? 1 : -1))
        .map(
          project =>
            project && (
              <ImageContainer key={project.name}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill={true}
                  sizes="50vw"
                  style={{
                    opacity:
                      visibleProject.name === project.name
                        ? visibleProject.opacity
                        : 0,
                  }}
                />
              </ImageContainer>
            )
        )}
    </StyledFixedImageContainer>
  );
};
