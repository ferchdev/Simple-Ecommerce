const { createContext, useState } = require("react");

const CartContext = createContext();

export const ShoppingCartContext = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const remove = (name) => {
    const cartFilter = cart.filter((data) => data.name !== name);
    setCart(cartFilter);
  };

  const subtotal = () => {
    let acc = 0;
    cart.map((product) => {
      acc += product.price * product.quantity;
    });
    return acc;
  };

  const add = (product) => {
    const isExists = cart.some((data) => data.name === product.name);
    if (isExists) {
      cart.map((data, index) => {
        if (product.name === data.name) {
          let cart2 = [...cart];
          cart2[index] = {
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            src: product.src,
          };
          return setCart(cart2);
        } else return false;
      });
    } else {
      return setCart([...cart, product]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, add, remove, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
