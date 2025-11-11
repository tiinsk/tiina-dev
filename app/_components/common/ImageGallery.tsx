import ReactImageGallery from 'react-image-gallery';
import Image from 'next/image';
import styled, { useTheme } from 'styled-components';
import 'react-image-gallery/styles/css/image-gallery.css';

import { Button } from './Button';
import { FragmentOf, readFragment } from 'gql.tada';
import { ResponsiveImageFragment } from '@/app/[lang]/projects/[slug]/fragments';

type ResponsiveImage = FragmentOf<typeof ResponsiveImageFragment>;

interface ImageGalleryProps {
  images: {
    responsiveImage: ResponsiveImage | null;
  }[];
}

interface GalleryItem {
  src: string;
  alt: string | null;
  base64: string | null;
  original: string;
  thumbnail: string;
  isFirst: boolean;
}

const StyledImageGallery = styled.div`
  .image-gallery-slide-wrapper {
    border-radius: ${({ theme }) => theme.spacings.s12};
    overflow: hidden;

    .image-gallery-image {
      aspect-ratio: 10 / 7;
    }
    .nav-button {
      opacity: 0;
      transition: opacity 0.2s ease-in;
      &:focus {
        opacity: 1;
      }
    }
    &:hover {
      .nav-button {
        opacity: 1;
      }
    }
  }

  .image-gallery-thumbnails {
    padding-top: ${({ theme }) => theme.spacings.s16};
    .image-gallery-thumbnails-container {
      display: flex;
      gap: ${({ theme }) => theme.spacings.s8};

      .image-gallery-thumbnail {
        border-radius: ${({ theme }) => theme.spacings.s8};
        overflow: hidden;
        transition: opacity 0.2s ease-in;
        opacity: 0.5;
        border: none;
        cursor: pointer;

        &.active,
        &:focus,
        &:hover {
          opacity: 1;
        }

        .image-gallery-thumbnail-image {
          aspect-ratio: 10 / 7;
          position: relative;
        }
      }
    }
  }
`;

const StyledImg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;

  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
`;

const NavButton = styled(Button)`
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  z-index: 4;
  padding: ${({ theme }) => theme.spacings.s12};
  border-radius: ${({ theme }) => theme.spacings.s24};
  margin: ${({ theme }) => theme.spacings.s12};
`;

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const { smallPageWidth } = useTheme();
  const items = images.reduce<GalleryItem[]>((acc, curr, i) => {
    const responsiveImage = readFragment(
      ResponsiveImageFragment,
      curr.responsiveImage
    );
    if (responsiveImage) {
      acc.push({
        ...responsiveImage,
        original: responsiveImage?.src,
        thumbnail: responsiveImage?.src,
        isFirst: i === 0,
      });
    }
    return acc;
  }, []);

  const imageSizes = `(max-width: ${smallPageWidth}) 100vw, ${smallPageWidth}`;
  const thumbSizes = `(max-width: 100px) 100vw, 100px`;

  return (
    <StyledImageGallery>
      <ReactImageGallery
        showFullscreenButton={false}
        showPlayButton={false}
        items={items}
        renderItem={item => (
          <div className="image-gallery-image" style={{ position: 'relative' }}>
            <StyledImg
              src={item.original}
              fill={true}
              alt={(item as GalleryItem).alt || ''}
              blurDataURL={(item as GalleryItem).base64 || undefined}
              placeholder="blur"
              preload={(item as GalleryItem).isFirst}
              sizes={imageSizes}
            />
          </div>
        )}
        renderThumbInner={item => (
          <div className="image-gallery-thumbnail-image">
            <StyledImg
              src={(item as GalleryItem).thumbnail}
              fill={true}
              alt={(item as GalleryItem).alt || ''}
              blurDataURL={(item as GalleryItem).base64 || undefined}
              placeholder="blur"
              sizes={thumbSizes}
            />
          </div>
        )}
        renderRightNav={(onClick, disabled) => (
          <NavButton
            variant="secondary"
            iconLeft="mdiChevronRight"
            onClick={onClick}
            disabled={disabled}
            className="nav-button"
            style={{ right: '0' }}
          />
        )}
        renderLeftNav={(onClick, disabled) => (
          <NavButton
            variant="secondary"
            iconLeft="mdiChevronLeft"
            onClick={onClick}
            disabled={disabled}
            className="nav-button"
            style={{ left: '0' }}
          />
        )}
      />
    </StyledImageGallery>
  );
};
