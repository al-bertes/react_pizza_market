import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
type pizzaesT = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: string;
  rating: number;
};

interface initialStatePizzaes {
  pizzaes: pizzaesT[];
  isLoading: boolean;
  activePagePagination: number;
  allPageCount: number;
  searchData: string;
}
type paramsT = {
  activePagePagination: number;
  countItemPerPage: number;
  dataSort: string;
  dataFilter: string;
  searchData: string;
};

export const fetchPizzaes = createAsyncThunk('items/fetchPizzaes', async (params: paramsT) => {
  const { activePagePagination, countItemPerPage, dataSort, dataFilter, searchData } = params;
  const { data } = await axios.get<pizzaesT[]>(
    `https://63d8dc4a5a330a6ae16f414d.mockapi.io/items?search=${searchData}&p=${activePagePagination}&l=${countItemPerPage}&${dataFilter}&${dataSort}`,
  );
  const allData = await axios.get<pizzaesT[]>(
    `https://63d8dc4a5a330a6ae16f414d.mockapi.io/items?search=${searchData}&${dataSort}&${dataFilter}`,
  );

  
  return {data, allData}
  
});

const initialState: initialStatePizzaes = {
  pizzaes: [],
  isLoading: true,
  activePagePagination: 1,
  allPageCount: 1,
  searchData: '',
};

export const pizzaSlice = createSlice({
  name: 'pizzaes',
  initialState,
  reducers: {
    setActivePagination: (state, actions: PayloadAction<number>) => {
      state.activePagePagination = actions.payload;
    },
    setSearchData: (state, actions: PayloadAction<string>) => {
      state.searchData = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzaes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPizzaes.fulfilled, (state, actions) => {
      state.pizzaes = actions.payload.data;
      state.allPageCount = Math.ceil(actions.payload.allData.data.length / 4);
      state.isLoading = false;
    });
    builder.addCase(fetchPizzaes.rejected, (state) => {
      state.isLoading = true;
    });
  }
});
export const { setActivePagination, setSearchData } = pizzaSlice.actions;

export default pizzaSlice.reducer;
