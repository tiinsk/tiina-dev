// https://vike.dev/Head

import logoUrl from '../assets/images/iceberg/duck.svg';
import poppinsBlack from '../assets/fonts/Poppins/Poppins-Black.ttf';
import poppinsBold from '../assets/fonts/Poppins/Poppins-Bold.ttf';
import poppinsLight from '../assets/fonts/Poppins/Poppins-Light.ttf';
import poppinsMedium from '../assets/fonts/Poppins/Poppins-Medium.ttf';
import poppinsRegular from '../assets/fonts/Poppins/Poppins-Regular.ttf';

export default function HeadDefault() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <link
        rel="preload"
        href={poppinsBlack}
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="preload"
        href={poppinsBold}
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="preload"
        href={poppinsLight}
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="preload"
        href={poppinsMedium}
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="preload"
        href={poppinsRegular}
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      ></link>
    </>
  );
}
