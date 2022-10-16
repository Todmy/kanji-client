import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { NftCollectionListPage, NftCollectionPage } from 'pages';
import store from 'app/store';

import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
// primereact/resources/themes/bootstrap4-light-blue/theme.css
// primereact/resources/themes/bootstrap4-light-purple/theme.css
// primereact/resources/themes/bootstrap4-dark-blue/theme.css
// primereact/resources/themes/bootstrap4-dark-purple/theme.css
// primereact/resources/themes/md-light-indigo/theme.css
// primereact/resources/themes/md-light-deeppurple/theme.css
// primereact/resources/themes/md-dark-indigo/theme.css
// primereact/resources/themes/md-dark-deeppurple/theme.css
// primereact/resources/themes/mdc-light-indigo/theme.css
// primereact/resources/themes/mdc-light-deeppurple/theme.css
// primereact/resources/themes/mdc-dark-indigo/theme.css
// primereact/resources/themes/mdc-dark-deeppurple/theme.css
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