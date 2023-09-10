import React from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [productQuantity, setProductQuantity]=React.useState(1);

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
    let remainedItems=cart.filter((item) => item.id !== id);
    setCart(remainedItems);
  }

  const increaseQuantity = () => {
    setProductQuantity(prevState => prevState+1);
  }

  const decreaseQuantity = () => {
    if(productQuantity > 1) {
      setProductQuantity(prevState => prevState-1);
    }
  }



  return (
    <CartContext.Provider value={{ 
        cart, 
        setCart,
        addToCart,
        deleteFromCart,
        productQuantity,
        increaseQuantity,
        decreaseQuantity
        }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

export const useGlobalContext = () => {
  return React.useContext(CartContext);
};
