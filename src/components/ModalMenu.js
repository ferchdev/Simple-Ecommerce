import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Blinker } from "next/font/google";
import Link from "next/link";

const blinker400 = Blinker({ weight: "400", subsets: ["latin"] });

export const ModalMenu = ({ isOpen, setModal }) => {
  return (
    <nav
      className={`ModalMenu fixed inset-0 bg-white flex flex-col justify-center items-center z-[999] ${
        blinker400.className
      } ${isOpen ? "block" : "hidden"}`}
    >
      <FontAwesomeIcon
        icon={faXmark}
        className="absolute top-5 right-5 font-black text-[25.5px] cursor-pointer"
        onClick={() => setModal(false)}
      />
      <ul
        className={`flex gap-y-7 text-3xl flex-col justify-center items-center`}
      >
        <li className="p-0 list-none sm:inline">
          <Link className="text hover:underline" href="/categories/all">
            CATEGORIES
          </Link>
        </li>
        <li className="p-0 list-none sm:inline">
          <Link className="hover:underline" href="/about-us">
            ABOUT US
          </Link>
        </li>
        <li className="p-0 list-none sm:inline">
          <Link className="hover:underline" href="/">
            HOME
          </Link>
        </li>
      </ul>
    </nav>
  );
};
