import { Blinker } from "next/font/google";
import Link from "next/link";

const blinker = Blinker({ weight: "700", subsets: ["latin"] });
const blinker400 = Blinker({ weight: "400", subsets: ["latin"] });

export const Footer = () => {
  return (
    <footer className={blinker400.className}>
      <form className="py-[70px] bg-footer-form flex flex-col justify-center items-center gap-[40px] xs:gap-5">
        <h2
          className={`text-center text-white font-bold text-4xl ${blinker.className}`}
        >
          Newsletter
        </h2>
        <div className="h-[35px] flex flex-col xs:flex-row items-center justify-center gap-[10px]">
          <input
            placeholder="your@email.com"
            name="email"
            className="h-full w-[240px] pl-[10px] py-[8px] xs:py-0 outline-0 border-0 text-lg"
          />{" "}
          <input
            type="submit"
            value="Subscribe"
            className="h-full w-full xs:w-fit cursor-pointer bg-neutral-200 hover:bg-neutral-300 border border-neutral-500 text-lg px-[10px]"
          />
        </div>
      </form>
      <div className="bg-footer py-[40px] flex justify-center items-center">
        <ul className="text-white flex gap-4 flex-wrap justify-center">
          <li className="hover:underline cursor-pointer">
            <Link href={"/about-us"}>About</Link>
          </li>
          <li className="hover:underline cursor-pointer">Store locator</li>
          <li className="hover:underline cursor-pointer">FAQs</li>
          <li className="hover:underline cursor-pointer">News</li>
          <li className="hover:underline cursor-pointer">Careers</li>
          <li className="hover:underline cursor-pointer">
            <Link href={"tel:+595 994260858"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
