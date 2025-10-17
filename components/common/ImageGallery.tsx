import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styled from 'styled-components';
import { Button } from './Button';
import { Blurhash } from 'react-blurhash';

interface GalleryImage {
  original: { src: string } | null;
  thumbnail: { src: string } | null;
  blurhash: string | null;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

interface GalleryItem extends ReactImageGalleryItem {
  blurhash: string;
}

const StyledImageGallery = styled.div`
  .image-gallery-slide-wrapper {
    border-radius: ${({ theme }) => theme.spacings.s12};
    overflow: hidden;

    .image-gallery-image {
      aspect-ratio: 3 / 2;
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
          aspect-ratio: 3 / 2;
          position: relative;
        }
      }
    }
  }
`;

const StyledBlurHash = styled(Blurhash)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  object-fit: cover;
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
  const items = images.reduce<GalleryItem[]>((acc, curr) => {
    if (curr.thumbnail?.src && curr.original?.src && curr.blurhash) {
      acc.push({
        original: curr.original.src,
        thumbnail: curr.thumbnail.src,
        blurhash: curr.blurhash,
      });
    }
    return acc;
  }, []);

  return (
    <StyledImageGallery>
      <ReactImageGallery
        showFullscreenButton={false}
        showPlayButton={false}
        items={items}
        renderItem={item => (
          <div className="image-gallery-image">
            <StyledBlurHash
              hash={(item as GalleryItem).blurhash}
              width="100%"
              height="100%"
            />
            <StyledImg src={item.original} />
          </div>
        )}
        renderThumbInner={item => (
          <div className="image-gallery-thumbnail-image">
            <StyledBlurHash
              hash={(item as GalleryItem).blurhash}
              width="100%"
              height="100%"
            />
            <StyledImg src={item.thumbnail} />
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
