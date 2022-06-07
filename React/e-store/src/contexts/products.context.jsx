import { createContext,setState } from "react";
import SHOP_DATA from '../../shop-data.json';

export const ProductsContext = createContext({
  SHOP_DATA
});

export const ProductsProvider = (children) => {
  const [shopData,setShopData] = setState(null);
  const value = {shopData,setShopData};
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}