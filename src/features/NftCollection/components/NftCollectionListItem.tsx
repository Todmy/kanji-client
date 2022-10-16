import React from 'react';
import { NftCollection } from '../dto';
import styles from './NftCollectionListItem.module.css';
import { Button } from 'primereact/button';

export interface INftCollectionListItemProps {
  item: NftCollection;
  onRemove: (id: string) => void;
  onClick: (id: string) => void;
}

export const NftCollectionListItem: React.FC<INftCollectionListItemProps> = (props) => {
  const { item, onRemove, onClick } = props;

  return <div className={styles.listItem} onClick={() => onClick(item._id)}>
    <div className={styles.pictureWrapper}>
      <img src={item.picture} className={styles.itemPicture} alt={item.collectionName} />
    </div>

    <div className={styles.itemMainDetails}>
      <h3 className={styles.itemName}>{item.collectionName}</h3>
      <h5 className={styles.itemDescription}>{item.description}</h5>
    </div>

    <Button 
      className="p-button-raised p-button-danger p-button-text"
      onClick={() => onRemove(item._id)}
      icon="pi pi-trash"
    />
  </div>;
};