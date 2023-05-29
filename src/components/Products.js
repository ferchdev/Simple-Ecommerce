import { Blinker } from "next/font/google";
import { RenderProducts } from "./RenderProducts";

const blinkerBold = Blinker({ weight: "600", subsets: ["latin"] });

export const Products = ({
  products,
  title = false,
  category,
  isPride = false,
}) => {

  const filterProducts = isPride
    ? products.filter((products) => products.isPride)
    : category != "all"
    ? products.filter(
        (products) => products.category === category.replace(/-/g, "")
      )
    : products;
    
  return (
    <section className="Products pb-[90px]">
      {title && (
        <h1 className={`font-semibold text-2xl w-[95%] ml:w-auto mx-auto ml:mx-0 ${blinkerBold.className}`}>
          {title}
        </h1>
      )}
      <div className="mt-[30px] grid grid-cols-1 ml:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {filterProducts.map((products) => (
          <RenderProducts products={products} key={products.key} />
        ))}
      </div>
    </section>
  );
};
