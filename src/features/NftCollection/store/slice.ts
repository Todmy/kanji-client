import { createSlice } from '@reduxjs/toolkit';
import { NftCollectionDTO } from '../interfaces';

type State = {
  data: NftCollectionDTO[];
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
      const index = state.data.findIndex((item: NftCollectionDTO) => item._id === id);
      if (index !== -1) {
        state.data[index] = data;
      } else {
        state.data.push(data);
      }
    },
  },
});

export const { setCollectionSet, setLoading, setError, updateCollection } = slice.actions;

export default slice.reducer;