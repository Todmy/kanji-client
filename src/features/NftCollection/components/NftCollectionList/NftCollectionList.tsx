import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/reduxHooks';

import { NftCollectionDTO } from '../../interfaces';
import { fetchNftCollections, getAllActiveNftCollections, deleteNftCollection } from '../../store';
import { NftCollectionListItem } from './NftCollectionListItem';

import styles from './NftCollectionList.module.css';

export interface INftCollectionListProps {
  onItemClick: (id: string) => void;
}

export const NftCollectionList: React.FC<INftCollectionListProps> = (props) => {
  const dispatch = useAppDispatch()
  const collections: NftCollectionDTO[] = useAppSelector(getAllActiveNftCollections)

  React.useEffect(() => {
    dispatch(fetchNftCollections());
  }, [dispatch]);

  return <div className={styles.listWrapper}>
    { 
      collections
        .map((collection: NftCollectionDTO, index: number) => (
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