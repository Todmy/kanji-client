import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NftCollectionList } from './pages/NftCollectionList';
import { NftCollectionItem } from './pages/NftCollectionItem';

export interface IAppProps {}

export const App: React.FC<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NftCollectionList />} />
        <Route path="/:collectionId" element={<NftCollectionItem />} />
        <Route path="/new-collection" element={<NftCollectionItem />} />
      </Routes>
    </BrowserRouter>
  );
}