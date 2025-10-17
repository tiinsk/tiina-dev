import { Body } from '../common/typography';
import { Dialog } from '../common/Dialog';
import { FragmentOf, readFragment } from 'gql.tada';
import { ProjectItemFragment } from './ProjectListItem';
import { ImageGallery } from '../common/ImageGallery';
import { graphql } from '../../datocms/graphql';

export const ProjectDialogFragment = graphql(`
  fragment ProjectDialogFragment on ProjectRecord {
    galleryImages {
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
}

export const ProjectDialog = ({
  isOpen,
  onClose,
  data,
}: ProjectDialogProps) => {
  const itemData = readFragment(ProjectItemFragment, data);
  const dialogData = readFragment(ProjectDialogFragment, itemData);
  return (
    <Dialog open={isOpen} onClose={() => onClose()} title={itemData.title}>
      <ImageGallery images={dialogData.galleryImages} />
      <Body dangerouslySetInnerHTML={{ __html: itemData.body }} />
    </Dialog>
  );
};
