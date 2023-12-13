//? Recommended name for feature -slice
//* Isinya adalah reducer dan actions
//* reducer adalah fungsi untuk merubah state. Tiap state punya manipulator logic masing2. Contoh fungsi untuk menambah data keranjang, maka fungsi itu hanya untuk itu saja.

//? Actions sebagai kurir
//? Reducer sebagai logic/fungsi

//? Dalam redux, actions dan reduces dipisah. Dalam redux-toolkit actions dan reduces digabung dalam satu file yang sama disebut slice.

//* Kelebihan reduxtoolkit sebagai standarisasi code agar mudah dibaca karena sudah ada templatenya

//? Slice hanya diisi oleh satu table
//? Satu fungsi hanya untuk satu fungsi

//Supaya bisa buat actions dan reduces
import { createSlice } from '@reduxjs/toolkit'

//Todo : Buat state awal
const initialState = {
    //? Karena datanya ada banyak, maka akan ditampung didalam array 
    cartItems: [],
};

//Todo : Buat Slice nya 
export const cartSlice = createSlice({
    //key nya adalah name
    //name:user, name:admin dll 
    name: "cart",
    initialState,
    //* Value dan key nya sama "initialState" bisa ditulis satu
    reducers: {
        //* Buat fungsi menambahkan item ke cart
        //? state disini sama fungsinya seperti useState yaitu sebagai penampung
        addItemToCart: (state, action) => {
            //? Setelah data masuk makan tugas redux sudah selesai. 
            // console.log("Data masuk selanjutnya di cardSlice");
            console.log(action.payload);
            // console.log(state);
            // document.writeln("tes")
        },
        // removeItemFromCart: () => {

        // }
    },
});

//? Isi dari actions adalah reducers
//? Data yang ada disini dikirimkan ke store
export const { addItemToCart } = cartSlice.actions

export default cartSlice