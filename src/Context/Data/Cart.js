import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // const [quantitycart, setQuantityCart] = useState(0);
  const [cart, setCart] = useState(
    localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : []
  );
  //Chưa làm tới bước này!!!!!
  const [voucher, setVoucher] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
  const handleAddToCart = (product) => {
    //add product to cart
    const newCart = [...cart];

    const checkIndex = newCart.findIndex((item) => item.id === product.id);
    if (checkIndex >= 0) {
      newCart[checkIndex].quantity++;
    } else {
      product.quantity = 1;
      newCart.push(product);
    }
    setCart(newCart);

    //add cart to localStorage
    localStorage.setItem("CART", JSON.stringify(newCart));
  };
  const handleQuantity = (type, index) => {
    const newCart = [...cart];
    if (type === "plus") {
      newCart[index].quantity++;
    } else if (type === "minus") {
      if (newCart[index].quantity > 1) {
        newCart[index].quantity--;
      } else {
        newCart.splice(index, 1);
      }
    }
    setCart(newCart);
    localStorage.setItem("CART", JSON.stringify(newCart));
  };
  const handleDelete = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleQuantity,
        handleDelete,
        isLoading, setIsLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const UseCart = () => {
  return useContext(CartContext);
};

export { CartProvider, UseCart };
