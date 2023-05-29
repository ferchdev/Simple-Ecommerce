import CartContext from "@/context/ShoppingCartContext";
import { faSquareCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Blinker } from "next/font/google";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const blinkerLight = Blinker({ weight: "400", subsets: ["latin"] });

export const ShoppingCartProduct = ({ name, price, src, quantity }) => {

  const initialQuantity = quantity;
  const [quantityState, setQuantityState] = useState(quantity);
  const { add, remove } = useContext(CartContext);
  
  useEffect(() => {
    setQuantityState(quantity);
  }, [quantity]);
  
  return (
    <div className="ShoppingCartProduct relative w-full pb-5 ml:pb-0 grid ml:grid-cols-3 gap-5 bg-third border border-slate-500 rounded-sm">
      <FontAwesomeIcon
        icon={faXmark}
        className="absolute right-3 top-2 text-xl cursor-pointer ml:hidden"
        onClick={() => remove(name)}
      />
      <div className="col-span-1 bg-white border h-[350px] ml:h-[150px] flex items-center">
        <Image
          src={src}
          className="h-[250px] ml:h-[80%] object-contain"
          alt={`${name} image`}
        />
      </div>
      <div className="col-span-1 flex flex-col justify-between items-center gap-5 ml:gap-0 ml:items-start ml:py-3">
        <p
          className={`text-2xl text-center ml:text-start ${blinkerLight.className}`}
        >
          {name}
        </p>
        <div className="flex justify-center h-10 ml:h-8 text-xl">
          <button
            className="border-2 border-black border-r-0 w-[50px] ml:w-[30px] text-white bg-black"
            onClick={() => {
              if (quantityState <= 1) return;
              setQuantityState(quantityState - 1);
            }}
          >
            {"-"}
          </button>
          <p className="border-2 border-black w-[50px] ml:w-[30px] flex justify-center items-center">
            {quantityState}
          </p>
          <button
            className="border-2 border-black border-l-0 w-[50px] ml:w-[30px] text-white bg-black"
            onClick={() => {
              if (quantityState >= 10) return;
              setQuantityState(quantityState + 1);
            }}
          >
            {"+"}
          </button>
          {quantityState !== initialQuantity && (
            <FontAwesomeIcon
              icon={faSquareCheck}
              className="ms-[10px] h-full text-green-800 cursor-pointer"
              onClick={() =>
                add({
                  name: name,
                  price: price,
                  quantity: quantityState,
                  src: src,
                })
              }
            />
          )}
        </div>
      </div>
      <div className="col-span-1 flex flex-col justify-between items-center ml:items-end ml:py-3 ml:pe-3">
        <p className="text-2xl font-bold">{`${price * quantityState}.00$`}</p>
        <FontAwesomeIcon
          icon={faXmark}
          className="text-3xl cursor-pointer hidden ml:block"
          onClick={() => remove(name)}
        />
      </div>
    </div>
  );
};
