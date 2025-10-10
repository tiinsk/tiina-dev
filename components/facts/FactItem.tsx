import {
  PostIt,
  PostItColor,
  PostItVariant,
} from '../../assets/images/notes/PostIt';
import { Label, Subtitle } from '../common/typography';
import { getFormattedDateMMMYYYY } from '../../utils/date';
import styled, { useTheme } from 'styled-components';
import { BodyStyle } from '../../theme/typography';
import { usePageContext } from 'vike-react/usePageContext';
import { Flex } from '../common/Flex';
import { Box } from '../common/Box';
import { graphql } from '../../datocms/graphql';
import { FragmentOf, readFragment } from 'gql.tada';
import { CustomIconType, Icon } from '../common/Icon';

export const FactFragment = graphql(`
  fragment FactFragment on FactRecord {
    title
    body
    startDate
    endDate
    icon
    iconBackgroundVariant
    postItVariant
  }
`);

export interface FactItemProps {
  data: FragmentOf<typeof FactFragment>;
}

const FactContainer = styled(Flex)`
  width: 100%;
  position: relative;
`;

const FactContent = styled.div`
  display: flex;
  flex-direction: column;
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
  right: -20%;
  top: -15%;
`;

export const FactItem = ({ data }: FactItemProps) => {
  const { locale } = usePageContext();
  const { spacings } = useTheme();

  const itemData = readFragment(FactFragment, data);

  return (
    <FactContainer>
      <PostIt variant={itemData.postItVariant as PostItVariant}>
        <FactContent>
          {(itemData.startDate || itemData.endDate) && (
            <Label>
              {`${itemData.startDate ? getFormattedDateMMMYYYY(itemData.startDate, locale) : ''} - ${
                itemData.endDate
                  ? getFormattedDateMMMYYYY(itemData.endDate, locale)
                  : ''
              }`}
            </Label>
          )}
          <Subtitle>{itemData.title}</Subtitle>
          <BodyText dangerouslySetInnerHTML={{ __html: itemData.body || '' }} />
        </FactContent>
      </PostIt>
      {itemData.icon && (
        <IconPostItContainer>
          <PostIt
            variant={4}
            width={spacings.s192}
            height={spacings.s192}
            color={itemData.iconBackgroundVariant as PostItColor}
          >
            <Icon type={itemData.icon as CustomIconType} size="s128" />
          </PostIt>
        </IconPostItContainer>
      )}
    </FactContainer>
  );
};
