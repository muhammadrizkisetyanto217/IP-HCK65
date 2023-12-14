import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, selectCartItems } from "../cart/cardSlice";

export function ProductList() {
  //* Local state
  //* isi useState usahakan sama dengan data yang akan diterima.
  //? Jika data yang diterima array, maka buat array kosong dst

  const [products, setProducts] = useState([]);
  //* Defaultnya false
  //* Buat statse isLoading manual

  const [isLoading, setLoading] = useState(false);

  //? Panggil dispatch
  //? useDispatch adalah kendaraan actions dari component ke store
  //? useSelector adalah kendaraan actions dari store ke component

  //?const hendleClickBuy kurirnya
  const dispatch = useDispatch();

  //?useSelector memanggil cardSlide
  //?effectnya tiap kali klik button maka akan menambahkan item
  // const cartItem = useSelector((selectCartItems));
  // console.log(cartItem);

  //* Fatching data async karena tergantung respon server
  useEffect(() => {
    const fetchProducts = async () => {
      //* Sambil menunggu fetchProducts maka
      setLoading(true);

      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        // console.log(data, "hasil data fetch");
        setProducts(data);
      } catch (error) {
        console.log(error);
        //! Finally akan dijalankan apabila try atau catchnya selesai
        //? Isi dari finally sebenarnya bisa dimasukkan di try dan catch ( keduanya )
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  //*import addItemToCart dari cart/cardSlice
  const handleClickBuy = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="container mx-auto w-full h-full grid grid-cols-2 gap-1 sm:gap-2 md:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-1 px-1 mt-5 ">
      {/* w-full dan h-full artinya card akan memenuhi container */}
      {/* grid grid-cols-1 adalah standard. grid-cols-1/2 untuk ukuran terkecil mulai dari mana*/}
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-blue-300 shadow w-full p-0"
          >
            {/* Card disatukan dalam group. Tanpa group gambar tidak bisa di hover */}
            {/* dikasih mx-auto karena w-80%. Tanpa ini maka gambar akan condong kekiri */}
            {/* overflow hidden berfungsi supaya hover img tidak keluar dari batas. overflow visible supaya gambar kurang */}
            {/* group akan dikirimkan/dipakai juga di className img */}
            <div className="group relative w-[80%] h-[250px] mx-auto overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                ///? img dibuatkan class lagi supaya satu grid dengan img lain. Sebab tiap img ukurannya berbeda-beda*/
                //? object-cover artinya semua bagian dari img masuk kedalam.
                className="w-full h-full object-cover group-hover:scale-110 transition-scale duration-500 ease-in-out "
              />
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                className="bg-blue-700 text-white hover:bg-blue-800 rounded-lg text-sm px-8 ml-8 mr-8 mt-2"
                onClick={() => handleClickBuy(product)}
              >
                Buy Now
              </button>
              <h3 className="font-bold m-1">{product.title}</h3>
              <h3 className="m-1">{product.price}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
