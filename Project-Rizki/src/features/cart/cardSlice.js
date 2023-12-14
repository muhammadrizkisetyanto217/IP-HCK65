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

    //? Validasi banyak akan ditempatkan di reducer 
    reducers: {
        //* Buat fungsi menambahkan item ke cart
        //? state disini sama fungsinya seperti useState yaitu sebagai penampung
        addItemToCart: (state, action) => {
            //? Setelah data masuk makan tugas redux sudah selesai. 

            //console.log(action, "action");
            //* Isi action salah satunya adalah payload dan type 

            //? Data dipush ke state cardItems 
            const newItem = action.payload
            //state.cartItems.push(newItem)

            //! Product sebelumnya dibandingkan dengan product baru 
            //* Product yang baru udah ada atau belum
            //console.log(state.cartItems);
            const selectCartIndex = state.cartItems.findIndex(product => product.id === newItem.id)
            // //console.log(selectCartIndex);

            //* Kalau datanya sudah ada masuk ke if 
            if (selectCartIndex !== -1) {
                selectCartIndex < 0
                state.cartItems[selectCartIndex].quantity += 1
                state.cartItems[selectCartIndex].totalPrice = state.cartItems[selectCartIndex].quantity * state.cartItems[selectCartIndex].price
                //* Apabila datanya sudah ada 
            } else {
                state.cartItems.push({
                    ...newItem,
                    quantity: 1, //Menambah key baru
                    totalPrice: newItem.price
                })
            }
            //console.log(action.payload, "action payload");
            // console.log(newItem);
            // console.log(state.cartItems);


        },
        // removeItemFromCart: () => {

        // }
    },
});

//? Isi dari actions adalah reducers
//? Data yang ada disini dikirimkan ke store
export const { addItemToCart } = cartSlice.actions

export default cartSlice

//? Selector
//* Jika mau ditampilkan jumlah jenis barang yang dipilih pakai .length
export const selectCartItems = state => state.cart.cartItems

//* Jika mau menampilkan total jumlah keseluruh barang
export const selectCartTotalItems = state => state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)

export const selectCartTotalPrices = state => state.cart.cartItems.reduce((total, item) => total + item.price, 0)