import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface INftCollectionItemProps {}

export const NftCollectionItem: React.FC<INftCollectionItemProps> = (props) => {
  const [ nftCollection, setNftCollection ] = useState(null);
  const { collectionId } = useParams();

  useEffect(() => {
    if (collectionId) {
      // fetch collection
    } else {
      setNftCollection(null);
    }
  }, [collectionId]);
  return <div>NftCollectionItem: { nftCollection }</div>;
}