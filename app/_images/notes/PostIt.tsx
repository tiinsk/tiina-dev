import styled, { DefaultTheme, useTheme } from 'styled-components';

import { PostIt1 } from './PostIt1';
import { PostIt2 } from './PostIt2';
import { PostIt3 } from './PostIt3';
import { PostIt4 } from './PostIt4';

export type PostItVariant = 1 | 2 | 3 | 4;

export type PostItColor = keyof DefaultTheme['colors']['posIts'];

export interface PostItProps {
  variant: PostItVariant;
  color?: PostItColor;
  children: React.ReactNode;
  size?: string;
}

const getPostItVariant = (variant: PostItVariant) => {
  switch (variant) {
    case 1:
      return PostIt1;
    case 2:
      return PostIt2;
    case 3:
      return PostIt3;
    case 4:
      return PostIt4;
    default:
      return PostIt1;
  }
};

const PostItBox = styled.div<{ $width: string; $height: string }>`
  position: relative;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

const PostItWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  position: relative;
  padding: 15%;
  height: 100%;
`;

export const PostIt = ({
  variant,
  children,
  color,
  size = '100%',
}: PostItProps) => {
  const PostItElement = getPostItVariant(variant);
  const { colors } = useTheme();

  return (
    <PostItBox $width={size} $height={size}>
      <PostItWrapper>
        <PostItElement
          width={size}
          height={size}
          color={colors.posIts[color || 'primary']}
        />
      </PostItWrapper>
      <Content>{children}</Content>
    </PostItBox>
  );
};
