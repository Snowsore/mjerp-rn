//Context.js

import { useState, createContext, useContext } from "react";

export const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider(props) {
  const [product, setProduct] = useState([]);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
}
