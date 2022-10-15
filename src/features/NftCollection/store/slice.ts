import { createSlice } from '@reduxjs/toolkit';

type State = {
  data: [];
  selected: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  selected: null,
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
    selectNftCollection: (state, action) => {
      state.selected = action.payload;
    }
  },
});

export const { selectNftCollection, setCollection, setLoading, setError } = slice.actions;

export default slice.reducer;