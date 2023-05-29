import { Blinker } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const blinker600 = Blinker({ weight: "600", subsets: ["latin"] });

export const Banner = ({ orderLast = false, src, title, description }) => {
  return (
    <section className="Banner pb-[90px] grid grid-cols-1 sm:grid-cols-2 relative">
      <div
        className={`col-span-1 py-[30px] md:py-0 h-full bg-primary flex justify-center items-center ${
          orderLast ? "order-last" : ""
        }`}
      >
        <div className="w-[80%] sm:w-[60%] flex flex-col gap-4">
          <h1 className={`font-semibold text-3xl ${blinker600.className}`}>
            {title}
          </h1>
          <p className="text-lg leading-5">{description}</p>
          <Link
            href={"/categories/all"}
            className={`font-semibold w-fit px-3 py-1 bg-black text-white text-lg border-2 border-black transition-all duration-300 hover:bg-transparent hover:text-black ${blinker600.className}`}
          >
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="col-span-1 h-full hidden sm:block">
        <Image
          src={src}
          className="object-cover h-full md:min-h-[400px] max-h-[400px]"
          alt="living room image"
        />
      </div>
    </section>
  );
};
