import { createContext, useContext } from "react";

const ProductsContext=createContext();

function ProductsProvider({children}){
   return (
   <ProductsContext.Provider value={{name:"Sunny"}}>
    {children}
    </ProductsContext.Provider>
   );
}

export const useProductsContext=()=>useContext(ProductsContext);

export default ProductsProvider;