import CartContext from "@/context/ShoppingCartContext";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Blinker } from "next/font/google";
import Image from "next/image";
import { useContext } from "react";
import emptyCart from "src/assets/images/shopping-cart/empty-cart.png";
import { ShoppingCartProduct } from "./ShoppingCartProduct";

const blinker = Blinker({ weight: "700", subsets: ["latin"] });
const blinkerNormal = Blinker({ weight: "600", subsets: ["latin"] });
const blinkerLight = Blinker({ weight: "400", subsets: ["latin"] });

export const ShoppingCart = ({ isOpen, setModal }) => {

  const { cart, subtotal } = useContext(CartContext);
  
  return (
    <section
      className={`ShoppingCart fixed h-full max-w-[100vw] overflow-hidden inset-0 bg-modal-bg transition-all duration-300 ease-in-out ${
        blinker.className
      } ${isOpen ? "z-[999]" : "opacity-0 z-[-1]"}`}
      onClick={() => setModal(false)}
    >
      <div
        className={`cart fixed container bg-white sm:w-[500px] h-full right-0 pt-5 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-[600px]"
        }`}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <header className="w-[90%] mx-auto flex justify-between">
          <h2 className="font-black text-[21.5px] ">{`Your Shopping Cart (${cart.length})`}</h2>
          <FontAwesomeIcon
            icon={faXmark}
            className="font-black text-[25.5px] cursor-pointer"
            onClick={() => setModal(false)}
          />
        </header>
        <main
          className={`w-[90%] mx-auto h-[90%] flex ${
            cart.length > 0 && "flex-col justify-center"
          } items-center ${blinkerNormal.className}`}
        >
          {cart.length < 1 && (
            <div className="empty w-[45%] mx-auto mt-10 flex flex-col items-center gap-[15px]">
              <Image
                src={emptyCart}
                style={{ width: "auto", height: "auto" }}
                alt="empty cart image"
              />
              <p className="text-lg sm:text-xl font-normal">
                You cart is empty
              </p>
              <button
                className={`bg-neutral-200 w-[170px] h-[45px] hover:bg-neutral-300 text-lg border border-neutral-500 ${blinkerLight.className}`}
                onClick={() => setModal(false)}
              >
                Keep Browsing
              </button>
            </div>
          )}
          {cart.length > 0 && (
            <div className=" w-[90%] ml:w-full h-[80%] border-dashed border-b-2 border-black overflow-y-scroll pe-1 flex flex-col gap-5 pb-5 mt-5 ml:mt-0">
              {cart.map((data, index) => (
                <ShoppingCartProduct
                  price={data.price}
                  name={data.name}
                  src={data.src}
                  quantity={data.quantity}
                  key={index}
                />
              ))}
            </div>
          )}
          {cart.length > 0 && (
            <div className="w-[90%] ml:w-full grid ml:grid-cols-2 pt-5">
              <div className="col-span-1 text-2xl flex justify-between ml:block">
                <p>Subtotal</p>
                <p>{`${subtotal()}.00$`}</p>
              </div>
              <button
                className={`self-end col-span-1 h-[50px] bg-transparent text-black text-xl border-2 border-black transition-all duration-300 hover:bg-black hover:text-white mt-4 ml:mt-0 ${blinkerLight.className}`}
              >
                Go to Checkout
              </button>
            </div>
          )}
        </main>
      </div>
    </section>
  );
};
