import { RootState } from 'app/store.d';
import { NftCollectionDTO } from '../interfaces';

export const getAllActiveNftCollections = (store: RootState) => store.nftCollection.data
  .filter((item: NftCollectionDTO) => !item.deletedAt)
  .sort((a: NftCollectionDTO, b: NftCollectionDTO) => a.createdAt > b.createdAt ? -1 : 1);

export const getLoadingState = (store: RootState) => store.nftCollection.isLoading;