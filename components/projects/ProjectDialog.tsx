import { Body, Small } from '../common/typography';
import { Dialog } from '../common/Dialog';
import { FragmentOf, readFragment } from 'gql.tada';
import { getTagVariant, ProjectItemFragment } from './ProjectListItem';
import { ImageGallery } from '../common/ImageGallery';
import { graphql } from '../../datocms/graphql';
import { Flex } from '../common/Flex';
import { Tag } from '../common/Tag';
import { LinkButton } from '../common/LinkButton';
import { ButtonIconType } from '../common/Button';

export const ProjectDialogFragment = graphql(`
  fragment ProjectDialogFragment on ProjectRecord {
    galleryImages {
      blurhash
      thumbnail: responsiveImage(imgixParams: { fm: jpg, w: 200 }) {
        src
      }
      original: responsiveImage(imgixParams: { fm: jpg, w: 1400 }) {
        src
      }
    }
  }
`);

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  data: FragmentOf<typeof ProjectItemFragment>;
  activeTitle: string;
}

export const ProjectDialog = ({
  isOpen,
  onClose,
  data,
  activeTitle,
}: ProjectDialogProps) => {
  const itemData = readFragment(ProjectItemFragment, data);
  const dialogData = readFragment(ProjectDialogFragment, itemData);

  return (
    <Dialog open={isOpen} onClose={() => onClose()} title={itemData.title}>
      <Flex flexDirection="row" gap="s8" flexWrap="wrap" mb="s24">
        {itemData.links.map(link => (
          <LinkButton
            key={link.icon}
            iconLeft={(link.icon as ButtonIconType) || undefined}
            href={link.url}
            target="_blank"
          />
        ))}
      </Flex>
      {/*<ImageGallery images={} />*/}
      <Flex flexDirection="column" gap="s12" mt="s24">
        {itemData.activeYearList && (
          <Small>{`${activeTitle}: ${itemData.activeYearList}`}</Small>
        )}
        <Flex flexDirection="row" gap="s12" flexWrap="wrap">
          {itemData.skills.map(skill => (
            <Tag
              key={skill.name}
              variant={getTagVariant(skill.skillType)}
              colorVariant="dark"
              text={skill.name || ''}
            />
          ))}
        </Flex>
        <Body dangerouslySetInnerHTML={{ __html: itemData.body }} />
      </Flex>
    </Dialog>
  );
};
