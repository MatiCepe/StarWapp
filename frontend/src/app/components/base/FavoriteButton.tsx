"use client";

import { useFavorites } from "../../../context/FavoriteContext";
import { Star } from "lucide-react";
import { Colors } from "../../other/Colors";

export default function FavoriteButton({ itemId }: { itemId: string }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const key = `favorite:${itemId}`;

  return (
    <button onClick={() => toggleFavorite(key)} style={{ cursor: 'pointer' }} className='hover:scale-110'>
      <Star
        color={isFavorite(key) ? Colors.gold : Colors.beige}
        fill={isFavorite(key) ? Colors.gold : "none"} />
    </button>
  );
}