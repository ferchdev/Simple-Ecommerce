import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logoHome from "src/assets/logos/logo.png";
import Link from "next/link";
import { Portal } from "./Portal";
import { ShoppingCart } from "./ShoppingCart";
import { useContext, useState } from "react";
import { ModalMenu } from "./ModalMenu";
import { Blinker } from "next/font/google";
import CartContext from "@/context/ShoppingCartContext";

const blinker400 = Blinker({ weight: "400", subsets: ["latin"] });

export const NavBar = () => {
  
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <>
      <nav
        className={`shadow-navShadow fixed inset-0 block z-[50] h-fit bg-white ${blinker400.className}`}
      >
        <div className="w-[95%] max-w-[1200px] mx-auto flex justify-between items-center">
          <Link href={"/"}>
            <Image
              width={80}
              height={80}
              src={logoHome}
              alt="simple ecommerce logo"
            />
          </Link>
          <div>
            <ul className="flex gap-x-7 text-lg">
              <li className="p-0 list-none hidden sm:inline">
                <Link className="text hover:underline" href="/categories/all">
                  CATEGORIES
                </Link>
              </li>
              <li className="p-0 list-none hidden sm:inline">
                <Link className="hover:underline" href="/about-us">
                  ABOUT US
                </Link>
              </li>
              <li
                after={cart.length}
                className={`p-0 list-none text-2xl sm:text-base cursor-pointer relative ${
                  cart.length > 0 &&
                  "after:absolute after:content-[attr(after)] after:bg-secondary after:rounded-[50%] after:text-white after:w-[20px] after:h-[20px] after:left-[12px] after:top-[-13px] after:text-center after:text-[15px] after:p-[5px] after:flex after:items-center after:justify-center"
                }`}
                onClick={() => setOpenCart(true)}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </li>
              <li
                className="p-0 list-none sm:hidden text-2xl sm:text-base cursor-pointer"
                onClick={() => setOpenMenu(true)}
              >
                <FontAwesomeIcon icon={faBars} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Portal>
        <ShoppingCart isOpen={openCart} setModal={setOpenCart} />
        <ModalMenu isOpen={openMenu} setModal={setOpenMenu} />
      </Portal>
    </>
  );
};
