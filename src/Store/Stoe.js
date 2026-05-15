/* eslint-disable no-undef */

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      cart: [],

      addTocart: (product) =>
        set((state) => {
          const exist = state.cart.find((item) => item.id === product.id);

          if (exist) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                    }
                  : item,
              ),
            };
          }

          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }),

      increasePopulation: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        })),

    decreasePopulation: (id) =>
  set((state) => ({
    cart: state.cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0),
  })),



    }),
    {
      name: "cart-storage", 
    },
  ),
);

export default useStore;
