import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/reduxHooks';

import { NftCollection } from '../dto/NftCollection.dto';
import { fetchNftCollections, getAllActiveNftCollections, deleteNftCollection } from '../store';
import { NftCollectionListItem } from './NftCollectionListItem';

import styles from './NftCollectionList.module.css';

export interface INftCollectionListProps {
  onItemClick: (id: string) => void;
}

export const NftCollectionList: React.FC<INftCollectionListProps> = (props) => {
  const dispatch = useAppDispatch()
  const collections: NftCollection[] = useAppSelector(getAllActiveNftCollections)

  React.useEffect(() => {
    dispatch(fetchNftCollections());
  }, [dispatch]);

  return <div className={styles.listWrapper}>
    { 
      collections
        .map((collection: NftCollection, index: number) => (
          <NftCollectionListItem 
            key={collection._id}
            item={collection}
            onRemove={(id: string) => dispatch(deleteNftCollection(id))}
            onClick={() => props.onItemClick(collection._id)}
          />
        ))
    }
  </div>;
}