import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

import { NftCollectionList } from '../features/NftCollection';

import styles from './NftCollectionListPage.module.css';

export interface INftCollectionListPageProps {}

export const NftCollectionListPage: React.FC<INftCollectionListPageProps> = (props) => {
  const navigate = useNavigate();

  return <div>
    <div className={styles.header}>
      <h5 className={styles.headerText}>NFT Collection List</h5>
      <Button
        className="p-button-raised p-button-secondary p-button-text"
        onClick={() => navigate('/new-collection')}
        icon="pi pi-plus"
        label="New Collection"
      />
    </div>
    <NftCollectionList
      onItemClick={(id: string) => navigate(`/${id}`)}
    />
  </div>;
}
