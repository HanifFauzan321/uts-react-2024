/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";

import { ShoppingCart } from "lucide-react";
import { CartContext } from "../pages/Film";
import { useState } from "react";

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(true);

  const toggleCartPopup = () => {
    setIsCartOpen(!isCartOpen);
  };

  const context = useContext(CartContext);
  const item = context.cart;
  console.log(context.cart);
  console.log(item);
  return (
    <>
      <div className="w-12 relative flex align-top text-nowrap">
        <button onClick={toggleCartPopup}>
          <ShoppingCart className="m-auto text-white" />
        </button>
        {isCartOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded shadow-lg max-w-md w-full">
              <h2 className="text-xl font-semibold mb-3">Keranjang Belanja:</h2>
              {item.length === 0 ? (
                <p>Keranjang kosong</p>
              ) : (
                <ul>
                  {item.map((cartItem, index) => (
                    <div key={index} className="flex gap-5">
                    <li >
                      {cartItem.name} - Rp {cartItem.price}
                    </li>
                    <img className="h-7 w-5" src={cartItem.image} />

                    </div>
                  ))}
                </ul>
              )}
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                onClick={toggleCartPopup}
              >
                Tutup
              </button>
            </div>
          </div>
        )}

        <span className="absolute top-0 right-0 text-xs rounded-full bg-slate-400 p-1">
          {context.count}
        </span>

        {/* Total  {data.name} Barang dalam keranjang */}
      </div>
    </>
  );
};

export default Cart;
