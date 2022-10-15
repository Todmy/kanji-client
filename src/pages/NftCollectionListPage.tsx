import React from 'react';

import { NftCollectionList } from '../features/NftCollection';

export interface INftCollectionListPageProps {}

export const NftCollectionListPage: React.FC<INftCollectionListPageProps> = (props) => {
  return <div>
    <NftCollectionList />
  </div>;
}
