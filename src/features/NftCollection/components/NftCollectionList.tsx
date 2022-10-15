import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/reduxHooks';

import { NftCollection } from '../dto/NftCollection.dto';
import { fetchNftCollections } from '../store';

export interface INftCollectionListProps {}

export const NftCollectionList: React.FC<INftCollectionListProps> = (props) => {
  const dispatch = useAppDispatch()
  const collections: NftCollection[] = useAppSelector((store) => store.nftCollection.data)

  React.useEffect(() => {
    dispatch(fetchNftCollections());
  }, [dispatch]);

  return <div>
    { 
      collections
        .map((collection: NftCollection, index: number) => (
          <div key={collection._id}>{index + 1}) {collection.collectionName}</div>
        ))
    }
  </div>;
}