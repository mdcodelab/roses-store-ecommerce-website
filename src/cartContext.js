import React from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [productQuantity]=React.useState(1);



  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    const updatedCart = [...cart];

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + 1,
      };
    } else {
      // If the product doesn't exist, add it to the cart with quantity of 1
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };




  const deleteFromCart = (id) => {
    let remainedItems = cart.filter((item) => item.id !== id);
    setCart(remainedItems);
  };

  //functions from the cart page
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



  // const increaseProductQuantity = (id) => {
    
  //   setProductQuantity((prevState) => prevState + 1);
  // };

  // // Quantities from the cart
  // const increaseCartQuantity = (id) => {
  //   setCart((prevCart) => {
  //     return prevCart.map((item) =>
  //       item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
  //     );
  //   });
  // };


  // const decreaseCartQuantity = (id) => {
  //   console.log("decrease");
  //   setCart((prevCart) => {
  //     return prevCart.map((item) =>
  //       item.id === id && item.quantity > 1
  //         ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     );
  //   });
  // };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        productQuantity,
        deleteFromCart,
        increaseCartQuantity,
        decreaseCartQuantity
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
