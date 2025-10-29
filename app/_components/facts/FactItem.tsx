'use client';

import styled, { useTheme } from 'styled-components';
import { FragmentOf, readFragment } from 'gql.tada';

import { PostIt, PostItColor, PostItVariant } from '@/app/_images/notes/PostIt';
import { Label, Subtitle } from '../common/typography';
import { getFormattedDateMMMYYYY } from '@/utils/date';
import { BodyStyle } from '@/theme/typography';
import { Flex } from '../common/Flex';
import { Box } from '../common/Box';
import { CustomIconType, Icon } from '../common/Icon';
import { Locale } from '@/locales';
import { FactFragment } from '@/app/_components/facts/fragments';
import { useParams } from 'next/navigation';

export interface FactItemProps {
  data: FragmentOf<typeof FactFragment>;
}

const FactContainer = styled(Flex)`
  width: 100%;
  position: relative;
  aspect-ratio: 1/1;
`;

const FactContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.s16};
  ul {
    padding-left: ${({ theme }) => theme.spacings.s16};
  }
  li {
    list-style-type: disc;
  }
`;

const BodyText = styled.div`
  ${BodyStyle};
`;

const IconPostItContainer = styled(Box)`
  position: absolute;
  right: -5rem;
  top: -7rem;
`;

export const FactItem = ({ data }: FactItemProps) => {
  const { lang } = useParams<{lang: Locale}>();
  const { spacings } = useTheme();

  const itemData = readFragment(FactFragment, data);

  return (
    <FactContainer>
      <PostIt variant={itemData.postItVariant as PostItVariant}>
        <FactContent>
          <Flex flexDirection="column" gap="s8">
            {(itemData.startDate || itemData.endDate) && (
              <Label>
                {`${itemData.startDate ? getFormattedDateMMMYYYY(itemData.startDate, lang) : ''} - ${
                  itemData.endDate
                    ? getFormattedDateMMMYYYY(itemData.endDate, lang)
                    : ''
                }`}
              </Label>
            )}
            <Subtitle>{itemData.title}</Subtitle>
          </Flex>
          <BodyText dangerouslySetInnerHTML={{ __html: itemData.body || '' }} />
        </FactContent>
      </PostIt>
      {itemData.icon && (
        <IconPostItContainer>
          <PostIt
            variant={4}
            size={spacings.s192}
            color={itemData.iconBackgroundVariant as PostItColor}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              style={{ height: '100%' }}
            >
              <Icon type={itemData.icon as CustomIconType} size="s96" />
            </Flex>
          </PostIt>
        </IconPostItContainer>
      )}
    </FactContainer>
  );
};
