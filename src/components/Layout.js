import Head from "next/head";
import { NavBar } from "./NavBar";
import { Blinker } from "next/font/google";
import { Footer } from "./Footer";
import { Header } from "./Header";

const blinker = Blinker({ weight: "400", subsets: ["latin"] });

export const Layout = ({
  children,
  title = "Simple Ecommerce",
  header = false,
  description,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavBar />
      {header && <Header />}
      <main
        className={`w-[92%] ml:w-[95%] max-w-[1200px] mx-auto pt-[8px] ${blinker.className}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
