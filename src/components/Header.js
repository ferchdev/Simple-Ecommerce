import Image from "next/image";
import {
  gadgets,
  confortably,
  kitchen,
  faceWash,
} from "@/assets/images/home/header";
import { Blinker } from "next/font/google";
import Link from "next/link";

const blinker = Blinker({ weight: "600", subsets: ["latin"] });

export const Header = () => {
  return (
    <header
      className={`w-[95%] max-w-[1200px] mx-auto h-full md:h-[620px] flex flex-col md:flex-row justify-center gap-3 pb-[70px] mt-[93px] ${blinker.className}`}
    >
      <section className="relative w-full md:w-[50%] h-full">
        <Link href="/categories/chairs">
          <div className="absolute inset-0 w-full h-full z-30 transition-[background-color] duration-500 ease-out bg-header-images hover:bg-modal-bg"></div>
          <Image
            src={confortably}
            className="w-full h-full object-cover"
            alt="living room image"
            priority
          />
          <h1 className="absolute left-5 bottom-5 text-white text-xl md:text-4xl z-40">
            Live Comfortably
          </h1>
        </Link>
      </section>
      <section className=" w-full md:w-[50%] h-full grid grid-cols-2 grid-rows-2 gap-3">
        <div className="relative h-full w-full col-span-1 row-span-2">
          <Link href={"/categories/skin-care"}>
            <div className="absolute inset-0 w-full h-full z-30 transition-[background-color] duration-500 ease-out bg-header-images hover:bg-modal-bg"></div>
            <Image
              src={faceWash}
              className="w-full h-full object-cover"
              alt="facial cream image"
            />
            <h1 className="absolute left-5 bottom-5 text-white text-xl md:text-4xl z-40">
              Skin Care
            </h1>
          </Link>
        </div>
        <div className="relative h-full w-full  row-span-1">
          <Link href={"/categories/kitchen"}>
            <div className="absolute inset-0 w-full h-full z-30 transition-[background-color] duration-500 ease-out bg-header-images hover:bg-modal-bg"></div>
            <Image
              src={kitchen}
              className="w-full h-full object-cover"
              alt="kitchen image"
            />
            <h1 className="absolute left-5 bottom-5 text-white text-xl md:text-4xl z-40">
              Kitchen
            </h1>
          </Link>
        </div>
        <div className="relative h-full w-full row-span-1">
          <Link href={"/categories/electronics"}>
            <div className="absolute inset-0 w-full h-full z-30 transition-[background-color] duration-500 ease-out bg-header-images hover:bg-modal-bg"></div>
            <Image
              src={gadgets}
              className="w-full h-full object-cover"
              alt="electronic gadgets image"
            />
            <h1 className="absolute left-5 bottom-5 text-white text-xl md:text-4xl z-40">
              Electronics
            </h1>
          </Link>
        </div>
      </section>
    </header>
  );
};
