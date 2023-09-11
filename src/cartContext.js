import React from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [productQuantity, setProductQuantity] = React.useState(1);

  const addToCart = (product, quantity) => {
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

  const deleteFromCart = (id) => {
    let remainedItems = cart.filter((item) => item.id !== id);
    setCart(remainedItems);
  };

  // Quantities from the ProductPage
  const decreaseProductQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity((prevState) => prevState - 1);
    }
  };

  const increaseProductQuantity = (id) => {
    
    setProductQuantity((prevState) => prevState + 1);
  };

  // Quantities from the cart
  const increaseCartQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseCartQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        deleteFromCart,
        productQuantity,
        increaseProductQuantity,
        decreaseProductQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
export const useGlobalContext = () => {
  return React.useContext(CartContext);
};
