import { Banner } from "@/components/Banner";
import { Layout } from "@/components/Layout";
import { Products } from "@/components/Products";
import banner1 from "@/assets/images/home/banners/banner1.webp";
import banner2 from "@/assets/images/home/banners/banner2.webp";
import { Trending } from "@/components/Trending";
import { products } from "@/data/products";

export default function Home({ staticProducts }) {
  return (
    <Layout
      header={true}
      description={
        "Shop now with Simple eCommerce and unlock a world of convenience, value, and excitement. Start exploring our catalog and discover the joy of shopping from the comfort of your own home."
      }
    >
      <Products
        products={staticProducts}
        title={"Products we are proud of"}
        isPride={true}
      />
      <Banner
        src={banner1}
        title={"Creative harmonious living"}
        description={
          "Simple eCommerce Products are all made to standard sizes so that you can mix and match them freely."
        }
      />
      <Trending products={staticProducts} />
      <Banner
        src={banner2}
        title={"Product Guarantee"}
        description={
          "At Simple eCommerce, we are dedicated to providing you with high-quality products and exceptional customer service."
        }
        orderLast={true}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      staticProducts: products,
    },
  };
}
