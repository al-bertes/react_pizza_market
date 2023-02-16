import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type sortT = {
  title: string;
  name: 'rating' | 'price' | 'title';
}
type initialStateSortT = {
  sort: sortT;
  catigories: string;
}
const initialState: initialStateSortT = {
  sort: {
    title: 'популярности',
    name: 'rating',
  },
  catigories: 'all',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    hendleSort: (state, action: PayloadAction<sortT>) => {
      state.sort = action.payload;
    },
    hendleCategory: (state, action) => {
      state.catigories = action.payload;
    },
  },
});

export const { hendleSort, hendleCategory } = sortSlice.actions;

export default sortSlice.reducer;
