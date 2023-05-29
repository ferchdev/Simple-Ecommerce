import { Layout } from "@/components/Layout";
import { ProductDisplay } from "@/components/ProductDisplay";
import { AddProduct } from "@/components/AddProduct";
import { Trending } from "@/components/Trending";
import { products } from "@/data/products";
import { Blinker } from "next/font/google";
import { useRouter } from "next/router";

const blinker700 = Blinker({ weight: "700", subsets: ["latin"] });
const blinker600 = Blinker({ weight: "600", subsets: ["latin"] });

export default function Id({ staticProducts }) {

  const router = useRouter();
  const id = router.query.id;
  const product = staticProducts.filter(
    (product) => product.name.toLowerCase().replace(/ /g, "-") === id
  );

  return (
    <Layout
      title={`Product | ${product[0].name}`}
      description={`${product[0].name}: ${product[0].description}`}
    >
      <section className="Product mt-[93px] pb-[93px]">
        <div className="Product relative grid grid-cols-1 lg:grid-cols-2 min-h-[550px]">
          <h1
            className={`lg:absolute z-[2] w-full text-center text-3xl my-[5px] mb-8 lg:mb-0 font-bold ${blinker700.className}`}
          >
            {product[0].name}
          </h1>
          <ProductDisplay
            src_1={product[0].src}
            src_2={product[0].src_2}
            src_3={product[0].src_3}
            name={product[0].name}
          />
          <div className="Description col-span-1 bg-primary flex justify-center items-center mt-10 lg:mt-0 py-10 lg:py-0">
            <div className="w-[80%] flex flex-col gap-14">
              <p className="text-xl">{product[0].description}</p>
              <AddProduct
                price={product[0].price}
                name={product[0].name}
                src={product[0].src}
              />
            </div>
          </div>
        </div>
        <div className="Features grid sm:grid-cols-3 gap-5 sm:h-[90px] mt-14">
          <div className="col-span-1 h-[90px] sm:h-full bg-primary flex flex-col justify-center gap-2 items-start ps-5">
            <h2 className={`text-xl font-bold ${blinker600.className}`}>
              Texture:
            </h2>
            <p className="text-lg">{product[0].texture}</p>
          </div>
          <div className="col-span-1 h-[90px] sm:h-full bg-primary flex flex-col justify-center gap-2 items-start ps-5">
            <h2 className={`text-xl font-bold ${blinker600.className}`}>
              Weight:
            </h2>
            <p className="text-lg">{product[0].weight}</p>
          </div>
          <div className="col-span-1 h-[90px] sm:h-full bg-primary flex flex-col justify-center gap-2 items-start ps-5">
            <h2 className={`text-xl font-bold ${blinker600.className}`}>
              Size:
            </h2>
            <p className="text-lg">{product[0].size}</p>
          </div>
        </div>
      </section>
      <Trending products={staticProducts} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = products.map((id) => {
    return {
      params: { id: id.name.toLowerCase().replace(/ /g, "-") },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      staticProducts: products,
    },
  };
}
