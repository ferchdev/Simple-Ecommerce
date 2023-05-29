import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Blinker } from "next/font/google";
import { RenderProducts } from "./RenderProducts";
import { useRef } from "react";

const blinkerBold = Blinker({ weight: "600", subsets: ["latin"] });

export const Trending = ({ products }) => {

  const trendingProducts = products.filter((products) => products.isTrending);
  const trendingsRef = useRef();

  const handleScrollRight = () => {
    trendingsRef.current.scrollLeft = trendingsRef.current.scrollLeft + 242;
  };

  const handleScrollLeft = () => {
    trendingsRef.current.scrollLeft = trendingsRef.current.scrollLeft - 242;
  };

  return (
    <section className="Trending pb-[90px]">
      <div className="flex justify-between mb-10">
        <h1 className={`font-semibold text-2xl ${blinkerBold.className}`}>
          Trending Now
        </h1>
        <div>
          <button
            className="py-2 px-4 me-1 bg-neutral-900 hover:bg-neutral-950 text-white"
            onClick={() => handleScrollLeft()}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className="py-2 px-4 bg-neutral-900 hover:bg-neutral-950 text-white"
            onClick={() => handleScrollRight()}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div
        ref={trendingsRef}
        className="flex max-w-[1200px] h-[300px] gap-6 overflow-x-scroll scrollbar-hide scroll-smooth touch-auto  py-[10px] px-[5px]"
      >
        {trendingProducts.map((products) => (
          <RenderProducts
            key={products.key}
            products={products}
            isTrending={true}
          />
        ))}
      </div>
    </section>
  );
};
