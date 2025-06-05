"use client";
import ToastUtils from "@/app/utils/ToastUtils";
import React, { createContext, useContext, useEffect, useState } from "react";

type FavoritesContextType = {
  isFavorite: (key: string) => boolean;
  toggleFavorite: (key: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const isFavorite = (key: string) => !!favorites[key];

  const toggleFavorite = (key: string) => {
    if (isFavorite(key)) {
      ToastUtils.info("Removed from favorites");
    } else {
      ToastUtils.success("Added to favorites");
    }
    const updated = { ...favorites, [key]: !favorites[key] };
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <FavoritesContext.Provider value={{ isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};