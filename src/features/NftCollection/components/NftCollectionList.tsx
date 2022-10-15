import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/reduxHooks';

import { NftCollection } from '../dto/NftCollection.dto';
import { fetchNftCollections, getAllActiveNftCollections } from '../store';
import { NftCollectionListItem } from './NftCollectionListItem';

export interface INftCollectionListProps {}

export const NftCollectionList: React.FC<INftCollectionListProps> = (props) => {
  const dispatch = useAppDispatch()
  const collections: NftCollection[] = useAppSelector(getAllActiveNftCollections)

  React.useEffect(() => {
    dispatch(fetchNftCollections());
  }, [dispatch]);

  return <div>
    { 
      collections
        .map((collection: NftCollection, index: number) => (
          <NftCollectionListItem 
            key={collection._id}
            item={collection}
          />
        ))
    }
  </div>;
}