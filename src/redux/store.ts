import { configureStore } from '@reduxjs/toolkit';
import sortReduser from './slices/sortSlice';
import cartReduser from './slices/caratSlice';
import pizzaesReduser from './slices/pizzaesSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    sort: sortReduser,
    cart: cartReduser,
    pizzaes: pizzaesReduser
  },
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();