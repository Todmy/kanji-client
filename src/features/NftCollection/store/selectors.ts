import { RootState } from 'app/store.d';
import { NftCollectionDO } from '../interfaces';

export const getAllActiveNftCollections = (store: RootState) => store.nftCollection.data
  .filter((item: NftCollectionDO) => !item.deletedAt)
  .sort((a: NftCollectionDO, b: NftCollectionDO) => {
    if (!a.createdAt || !b.createdAt || a.createdAt === b.createdAt) {
      return 0;
    }

    return a.createdAt > b.createdAt ? -1 : 1;
  });

export const getLoadingState = (store: RootState) => store.nftCollection.isLoading;

type CurrentNftCollection = NftCollectionDO | undefined;
export const getCollectionById = (id?: string) => (store: RootState): CurrentNftCollection => {
  if (!id) return undefined;
  return store.nftCollection.data.find((item: NftCollectionDO) => item._id === id);
};