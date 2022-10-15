import React from 'react';
import { NftCollection } from '../dto';

export interface INftCollectionListItemProps {
  item: NftCollection;
}

export const NftCollectionListItem: React.FC<INftCollectionListItemProps> = (props) => {
  const { item } = props;

  return <div>
    {item.collectionName}
  </div>;
};