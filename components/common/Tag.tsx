import styled from 'styled-components';
import { Small } from './typography';

export type TagVariant = 'tech' | 'core' | 'design';

interface TagProps {
  variant?: TagVariant;
  text?: string;
}

const StyledTag = styled.div<{
  $variant: TagVariant;
}>`
  display: flex;
  align-items: center;

  padding: ${({ theme }) => theme.spacings.s4}
    ${({ theme }) => theme.spacings.s8};
  border-radius: ${({ theme }) => theme.spacings.s12};
  width: fit-content;

  color: ${({ theme }) => theme.colors.typography.secondary};

  white-space: nowrap;

  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const Tag = ({ variant = 'tech', text, ...props }: TagProps) => {
  return (
    <StyledTag {...props} $variant={variant}>
      <Small color={variant}>{text}</Small>
    </StyledTag>
  );
};
