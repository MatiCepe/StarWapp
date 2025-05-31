"use client";

import { useSound } from "@/app/hooks/useSounds";
import { Heart } from "lucide-react";
import { useFavorites } from "../../../context/FavoriteContext";
import { Colors } from "../../other/Colors";

export default function FavoriteButton({ itemId }: { itemId: string }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const lightSaber = '/assets/lightsaber.wav';

  const playClick = useSound(lightSaber);
  const key = `favorite:${itemId}`;

  return (
    <button onClick={()=> {
      playClick();
      toggleFavorite(key);
    }} style={{ cursor: 'pointer' }} className='hover:scale-110'>
      <Heart
        color={Colors.beige}
        fill={isFavorite(key) ? Colors.burntOrange : "none"} 
        size={28}
        />
    </button>
  );
}