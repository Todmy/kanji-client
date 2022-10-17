import { createSlice } from '@reduxjs/toolkit';
import { NftCollectionDO } from '../interfaces';

type State = {
  data: NftCollectionDO[];
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  isLoading: false,
  error: null,
}

export const slice = createSlice({
  name: 'nftCollection',
  initialState,
  reducers: {
    setCollectionSet: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    updateCollection: (state, action) => {
      const { id, data } = action.payload;
      const index = state.data.findIndex((item: NftCollectionDO) => item._id === id);
      if (index !== -1) {
        state.data[index] = data;
      } else {
        state.data.push(data);
      }
    },
    addCollection: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { setCollectionSet, setLoading, setError, updateCollection, addCollection } = slice.actions;

export default slice.reducer;