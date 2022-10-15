import { configureStore } from '@reduxjs/toolkit';
import { reducer as NftCollectionReducer } from '../features/NftCollection';

const store = configureStore({
  reducer: {
    nftCollection: NftCollectionReducer,
  },
});

export default store;