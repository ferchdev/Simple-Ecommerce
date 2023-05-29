import { Blinker } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const blinkerBold = Blinker({ weight: "600", subsets: ["latin"] });

export const RenderProducts = ({ products, isTrending = false }) => {
  return (
    <Link
      href={`/categories/product/${products.name
        .toLowerCase()
        .replace(/ /g, "-")}`}
    >
      <div
        className={`RenderProduct ${
          isTrending
            ? "h-full min-w-[218px] "
            : "col-span-1 h-[350px] w-[95%] ml:w-auto mx-auto ml:mx-0"
        } relative flex justify-center items-center outline outline-2  outline-slate-300 cursor-pointer transition-[outline] duration-300 hover:outline-black`}
      >
        <Image
          src={products.src}
          className={`absolute object-contain ${
            isTrending ? "w-[180px] h-[140px]" : "w-[200px] h-[200px]"
          } ${products.top ? "top-0" : `bottom-[100px]`}`}
          alt={`${products.name} image`}
        />
        <p className="absolute bottom-10 left-3 text-lg">{products.name}</p>
        <p
          className={`absolute bottom-1 left-3 font-semibold text-[22.5px] ${blinkerBold.className}`}
        >{`${products.price}$`}</p>
      </div>
    </Link>
  );
};
