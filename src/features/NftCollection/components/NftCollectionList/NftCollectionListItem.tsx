import React from 'react';
import { NftCollectionDO } from '../../interfaces';
import styles from './NftCollectionListItem.module.css';
import { Button } from 'primereact/button';

export interface INftCollectionListItemProps {
  item: NftCollectionDO;
  onRemove: (id: string) => void;
  onClick: (id: string) => void;
}

const PicturePlaceholder = () => (
  <div className={styles.picturePlaceholder}>
    <i className="pi pi-image" />
  </div>
);

export const NftCollectionListItem: React.FC<INftCollectionListItemProps> = (props) => {
  const { item, onRemove, onClick } = props;
  const picture = item.picture as string | undefined;

  return <div className={styles.listItem} onClick={() => onClick(item._id!)}>
    <div className={styles.pictureWrapper}>
      {
        picture 
          ? <img src={picture} className={styles.itemPicture} alt={item.collectionName} />
          : <PicturePlaceholder />
      }
    </div>

    <div className={styles.itemMainDetails}>
      <h3 className={styles.itemName}>{item.collectionName}</h3>
      <h5 className={styles.itemDescription}>{item.description}</h5>
    </div>

    <Button 
      className="p-button-raised p-button-danger p-button-text"
      onClick={(event) => {
        onRemove(item._id!);
        event.stopPropagation();
      }}
      icon="pi pi-trash"
    />
  </div>;
};