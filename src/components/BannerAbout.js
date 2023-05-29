import { Blinker } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const blinker700 = Blinker({ weight: "700", subsets: ["latin"] });

export const BannerAbout = ({
  src,
  description,
  title,
  orderLast = false,
  btnTitle,
}) => {
  return (
    <div className="BannerAbout w-full flex items-start pb-[90px]">
      <div className={`md:w-[40%] self-center ${orderLast && "order-last"}`}>
        <h1 className={`text-5xl font-bold ${blinker700.className}`}>
          {title}
        </h1>
        <p className="text-slate-600 text-lg my-5 mb-8 lg:w-[80%]">
          {description}
        </p>
        <Link
          href={`${btnTitle === "CONTACT US" ? "tel:+595 994260858" : "/"}`}
          className="w-fit px-4 py-2 bg-transparent text-black text-xl border-2 border-black transition-all duration-300 hover:bg-black hover:text-white "
        >
          {btnTitle}
        </Link>
      </div>
      <div className="w-[60%] self-center hidden md:block">
        <Image
          src={src}
          alt="people image"
          className="h-[450px] lg:h-[550px] lg:w-[700px]"
        />
      </div>
    </div>
  );
};
