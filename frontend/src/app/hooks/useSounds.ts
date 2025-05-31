import { useCallback } from "react";

export const useSound = (src: string, volume = 0.5) => {
    return useCallback(() => {
        const audio = new Audio(src);
        audio.volume = volume;
        audio.play();
    }, [src, volume]);
};