import CartContext from "@/context/ShoppingCartContext";
import { Blinker } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import { PopUp } from "./PopUp";

const blinker600 = Blinker({ weight: "600", subsets: ["latin"] });

export const AddProduct = ({ price, name, src }) => {
  
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState({ name: null, quantity: 0 });
  const { add, cart } = useContext(CartContext);

  useEffect(() => {
    setQuantity(1);
  }, [name]);

  return (
    <>
      <div
        className={`AddProduct grid grid-cols-1 sm:grid-cols-3 sm:h-[55px] w-full text-2xl ${blinker600.className}`}
      >
        <h2 className="col-span-1 h-full flex justify-center sm:justify-start items-center">
          Quantity
        </h2>
        <div className="grid grid-cols-3 h-[55px] w-[170px] sm:w-full mx-auto my-5 sm:my-0 sm:mx-0 sm:h-full">
          <button
            className="col-span-1 h-full border border-black border-r-0 bg-white hover:bg-transparent"
            onClick={() => {
              if (quantity <= 1) return;
              setQuantity(quantity - 1);
            }}
          >
            {"-"}
          </button>
          <p className="col-span-1 h-full border border-black flex justify-center items-center">
            {quantity}
          </p>
          <button
            className="col-span-1 h-full border border-black border-l-0 bg-white hover:bg-transparent"
            onClick={() => {
              if (quantity >= 10) return;
              setQuantity(quantity + 1);
            }}
          >
            {"+"}
          </button>
        </div>
        <h2 className="col-span-1 h-full flex justify-center sm:justify-end items-center">
          {`${price * quantity}.00$`}
        </h2>
      </div>
      <div
        className={`Buttons w-full sm:h-[55px] grid grid-cols-1 sm:grid-cols-2 gap-4 text-2xl ${blinker600.className}`}
      >
        <button
          className="bg-transparent h-[55px] sm:h-full text-black text-lg border-2 border-black transition-all duration-300 hover:bg-black hover:text-white"
          onClick={() => {
            const isExists = cart.some((data) => data.name === name);
            add({ name: name, price: price, quantity: quantity, src: src });
            setIsAdded({
              name: name,
              quantity: quantity,
              isAdded: isExists ? true : false,
            });
          }}
        >
          ADD TO CART
        </button>
        <button
          className=" bg-secondary h-[55px] sm:h-full text-white text-lg border-2 border-secondary transition-all duration-300 hover:bg-transparent hover:text-secondary"
        >
          BUY NOW
        </button>
      </div>
      <PopUp isAdded={isAdded} />
    </>
  );
};
