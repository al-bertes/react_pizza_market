import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

type itemsT = {
  price: number;
  imageUrl: string;
  title: string;
  id: number;
  typePizza: string;
  countItem: number;
  sizes: number;
};
interface initialStateCart {
  totalPrice: number;
  items: itemsT[];
}

const initialState: initialStateCart = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza: (state, actions: PayloadAction<itemsT>) => {
      let isAdd = true;
      state.items.map((item) => {
        if (
          item.id === actions.payload.id &&
          item.typePizza === actions.payload.typePizza &&
          item.sizes === actions.payload.sizes
        ) {
          item.countItem += 1;
          isAdd = false;
        }
        return item;
      });
      if (isAdd) state.items.push(actions.payload);
      state.totalPrice += actions.payload.price;
    },
    incCountPizza: (state, actions: PayloadAction<itemsT>) => {
      state.items.map((item) => {
        if (_.isEqual(item, actions.payload)) {
          item.countItem += 1;
          state.totalPrice += item.price;
        }
        return item;
      });
    },
    decCountPizza: (state, actions: PayloadAction<itemsT>) => {
      state.items.map((item) => {
        if (_.isEqual(item, actions.payload)) {
          if (item.countItem !== 0) {
            item.countItem -= 1;
            state.totalPrice -= item.price;
          }
        }
        return item;
      });
    },
    deletePizza: (state, actions: PayloadAction<itemsT>) => {
      state.items = state.items.filter((item) => !_.isEqual(item, actions.payload));
    },
  },
});

export const { addPizza, incCountPizza, decCountPizza, deletePizza } = cartSlice.actions;

export default cartSlice.reducer;
