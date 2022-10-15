import { RootState } from 'app/store.d';
import { NftCollection } from '../dto';

export const getAllActiveNftCollections = (store: RootState) => store.nftCollection.data
  .filter((item: NftCollection) => !item.deletedAt)
  .sort((a: NftCollection, b: NftCollection) => a.createdAt > b.createdAt ? -1 : 1);
