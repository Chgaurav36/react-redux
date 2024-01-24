import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const cartstore = configureStore({
    reducer: {
        cart: cartReducer,
        // product: cartProduct,

    }
});

export default cartstore;