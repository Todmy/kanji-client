import React from 'react';
import { NftCollectionForm } from 'features/NftCollection';


export interface INftCollectionPageProps {}

export const NftCollectionPage: React.FC<INftCollectionPageProps> = (props) => {
  return <div>
    <div className="">
      <div className="">
        <h3>NftCollectionPage</h3>
        <div className="card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div> 
      </div>
    </div>
    <NftCollectionForm />
  </div>;
};