import { Layout } from "@/components/Layout";
import { Products } from "@/components/Products";
import { products } from "@/data/products";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Blinker } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const blinker700 = Blinker({ weight: "700", subsets: ["latin"] });

const Category = ({ staticProducts }) => {

  const router = useRouter();
  const title = router.query.category;
  const categories = [
    "All",
    "Electronics",
    "Chairs",
    "Kitchen",
    "Lamps",
    "Skin Care",
  ];
  const headTitle = categories.filter(
    (response) => response.toLowerCase() === title.replace(/-/g, " ")
  );
  
  return (
    <Layout
      title={`Categories | ${headTitle}`}
      description={
        "At Simple eCommerce, we pride ourselves on offering a wide range of product categories to cater to diverse needs and preferences. Our carefully curated selection ensures that you can find everything you need conveniently in one place."
      }
    >
      <section className="Category mt-[93px]">
        <div className="relative">
          <p className="absolute left-0">
            <Link href="/">
              <FontAwesomeIcon icon={faAngleLeft} className="me-[5px]" />
              Home
            </Link>
          </p>
          <h1
            className={`w-full text-center font-bold text-2xl ${blinker700.className}`}
          >
            {title.toUpperCase().replace(/-/g, " ")}
          </h1>
        </div>
        <div className="py-[70px] flex justify-center items-center gap-3 flex-wrap">
          {categories.map((title) => (
            <Link
              href={`/categories/${title.toLowerCase().replace(/ /g, "-")}`}
              className="py-[3px] px-[15px] text-base outline outline-2  outline-[rgba(0,0,0,.3)] transition-[outline] duration-300 hover:outline-[rgba(0,0,0,.5)]"
              key={title}
            >
              {title}
            </Link>
          ))}
        </div>
        <Products products={staticProducts} category={title} />
      </section>
    </Layout>
  );
};

export default Category;

export async function getStaticPaths() {
  const categories = [
    "all",
    "chairs",
    "electronics",
    "kitchen",
    "lamps",
    "skin-care",
  ];
  const paths = categories.map((category) => {
    return {
      params: { category: category },
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
