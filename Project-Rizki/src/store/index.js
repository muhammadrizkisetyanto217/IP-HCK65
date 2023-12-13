//? Dibuat js karena
//*1. Bukan component
//*2. Tidak ada hubungannya dengan html
//TODO: Store sebagai bank data



import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cardSlice'


export default configureStore({
    reducer: {
        //* name "cart" bebas
        //* data yang dibutuhkan store hanya reducer 
        cart: cartSlice.reducer,
    }
})
//console.log("Data masuk pertama diStore");