import { NftCollectionDataHost, NftCollectionBlockchain } from '../enums';
import { Nft } from './Nft.dto';

export interface NftCollection {
  _id: string;
  picture: string;
  blockchain: NftCollectionBlockchain;
  dataHost: NftCollectionDataHost;
  owner: string;
  collectionName: string;
  symbol: string;
  amount: number;
  description: string;
  set: Nft[];
  modifiedAt?: Date;
  createdAt: Date;
  deletedAt?: Date;
}
