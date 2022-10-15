import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { NftCollectionListPage, NftCollectionItemPage } from 'pages';
import store from 'app/store';

export interface IAppProps {}

export const App: React.FC<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NftCollectionListPage />} />
          <Route path="/:collectionId" element={<NftCollectionItemPage />} />
          <Route path="/new-collection" element={<NftCollectionItemPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}