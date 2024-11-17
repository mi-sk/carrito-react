import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from './reducer';

const store = configureStore({
  reducer: {
    storeProducts: carReducer,
  },
});

export {store};
