import { FragmentOf, readFragment } from 'gql.tada';

import { graphql } from '../../datocms/graphql';

export const HeaderFragment = graphql(`
  fragment HeaderFragment on HeaderSectionRecord {
    title
    name
    subtitle
    image {
      url
    }
  }
`);

export const HeaderSection = ({
  data,
}: {
  data: FragmentOf<typeof HeaderFragment> | null;
}) => {
  const headerData = readFragment(HeaderFragment, data);

  if (!headerData) {
    return null;
  }

  return (
    <>
      <h3>
        {headerData.title} {headerData.name}
      </h3>
      <h4>{headerData.subtitle}</h4>
    </>
  );
};
