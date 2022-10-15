import { createSlice } from '@reduxjs/toolkit';
import { NftCollection } from '../dto';

type State = {
  data: NftCollection[];
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  isLoading: false,
  error: null,
}

export const slice = createSlice({
  name: "nftCollection",
  initialState,
  reducers: {
    setCollection: (state, action) => {
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
      const index = state.data.findIndex((item: NftCollection) => item._id === id);
      if (index !== -1) {
        state.data[index] = data;
      } else {
        state.data.push(data);
      }
    },
  },
});

export const { setCollection, setLoading, setError, updateCollection } = slice.actions;

export default slice.reducer;