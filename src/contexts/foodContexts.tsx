import { createContext, useState } from "react";
import { api } from "../api/api";
import React, { useEffect } from "react";

interface iFoodContextProps {
  children: React.ReactNode;
}

export interface iFoodContext {
  products: iFoodProducts[];
  setProducts: React.Dispatch<React.SetStateAction<iFoodProducts[]>>;
  productsList: () => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  foodCart: iFoodProductsCart[];
  setFoodCart: React.Dispatch<React.SetStateAction<iFoodProductsCart[]>>;
}

export interface iFoodProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iFoodProductsCart extends iFoodProducts {
  quantity: number;
}

export const FoodContext = createContext({} as iFoodContext);

export const FoodProvider = ({ children }: iFoodContextProps) => {
  const [products, setProducts] = useState([] as iFoodProducts[]);
  const [showModal, setShowModal] = useState(false);
  const [foodCart, setFoodCart] = useState([] as iFoodProductsCart[]);

  const productsList = async () => {
    try {
      const token = localStorage.getItem("session");
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.get<iFoodProducts[]>("/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    productsList();
  }, []);

  return (
    <FoodContext.Provider
      value={{
        products,
        setProducts,
        productsList,
        showModal,
        setShowModal,
        foodCart,
        setFoodCart,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
