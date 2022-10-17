import { NftCollectionDataHost, NftCollectionBlockchain } from '../enums';
import { Nft } from './Nft';

export interface NftCollectionDTO {
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

type optionalProps = '_id' | 'picture' | 'createdAt';
export interface NftCollectionDO extends Omit<NftCollectionDTO, optionalProps> {
  _id?: string;
  picture?: string | File;
  createdAt?: Date;
}