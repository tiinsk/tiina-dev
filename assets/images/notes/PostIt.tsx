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
  width?: string;
  height?: string;
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

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 15%;
  padding-top: 20%;
`;

export const PostIt = ({
  variant,
  children,
  color,
  width = '100%',
  height = '100%',
}: PostItProps) => {
  const PostItElement = getPostItVariant(variant);
  const { colors } = useTheme();

  return (
    <PostItBox $width={width} $height={height}>
      <PostItWrapper>
        <PostItElement
          width={width}
          height={height}
          color={colors.posIts[color || 'primary']}
        />
      </PostItWrapper>
      <ContentContainer>
        <Content>{children}</Content>
      </ContentContainer>
    </PostItBox>
  );
};
