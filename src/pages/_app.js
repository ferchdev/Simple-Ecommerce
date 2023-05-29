import { ShoppingCartContext } from "@/context/ShoppingCartContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ShoppingCartContext>
        <Component {...pageProps} />
      </ShoppingCartContext>
    </>
  );
}
