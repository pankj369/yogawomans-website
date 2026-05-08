import { createContext, useContext, useEffect, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [items, setItems] = useLocalStorage("yogawomans_wishlist", [], "localStorage");

  const toggleWishlist = (product) => {
    setItems((current) => {
      const exists = current.some((item) => item.id === product.id);
      return exists ? current.filter((item) => item.id !== product.id) : [...current, product];
    });
  };

  const isWishlisted = (id) => items.some((item) => item.id === id);

  const value = useMemo(
    () => ({
      wishlistItems: items,
      wishlistCount: items.length,
      toggleWishlist,
      isWishlisted,
      clearWishlist: () => setItems([]),
    }),
    [items]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
}
