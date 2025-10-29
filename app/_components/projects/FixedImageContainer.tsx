import styled from 'styled-components';
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

const FixedImage = styled.img`
  position: absolute;
  width: 100%;
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
              <FixedImage
                key={project.name}
                src={project.image}
                style={{
                  opacity:
                    visibleProject.name === project.name
                      ? visibleProject.opacity
                      : 0,
                }}
              />
            )
        )}
    </StyledFixedImageContainer>
  );
};
