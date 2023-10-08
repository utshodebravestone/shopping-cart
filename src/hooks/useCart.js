import { useContext } from "react";

import { CartContext } from "../contexts/cart";

const useCart = () => useContext(CartContext);

export default useCart;
