import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { NftCollectionListPage, NftCollectionPage } from 'pages';
import store from 'app/store';

import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export interface IAppProps {}

export const App: React.FC<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NftCollectionListPage />} />
          <Route path="/:collectionId" element={<NftCollectionPage />} />
          <Route path="/new-collection" element={<NftCollectionPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}