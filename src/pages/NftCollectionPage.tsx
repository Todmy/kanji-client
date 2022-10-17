import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NftCollectionForm } from 'features/NftCollection';

import styles from './NftCollectionPage.module.css';
export interface INftCollectionPageProps {}

export const NftCollectionPage: React.FC<INftCollectionPageProps> = (props) => {
  const navigate = useNavigate();
  return <div>
    <div className="">
      <div className="">
        <h3>NftCollectionPage</h3>
        <div className="card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div> 
      </div>
    </div>
    <NftCollectionForm
      className={styles.form}
      onSuccessfulSubmit={() => navigate('/')}
    />
  </div>;
}