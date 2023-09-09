import React from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product, quantity) => {
    console.log(product);
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
        //if exists, update the quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // if does not exists, it will be added
      setCart([...cart, { ...product, quantity }]);
    }
  };



  return (
    <CartContext.Provider value={{ 
        cart, 
        setCart,
        addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

export const useGlobalContext = () => {
  return React.useContext(CartContext);
};
