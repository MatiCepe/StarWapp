"use client";
import Image from 'next/image';
import InternalImage from '../dtos/InternalImage';

interface ImageGridProps {
    images: InternalImage[]; 
  }
  
  export const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    return (
        <div className="flex justify-center mt-10">
        <div className="w-[75vw] sm:w-[50vw] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
    {images.map((src, index) => (
              <div key={index} className="relative aspect-[9/16] transition-transform duration-300 ease-in-out hover:scale-105 hover:-rotate-x-2 hover:rotate-y-2 hover:shadow-xl perspective-1000">
                <Image
                    src={src.url}
                    alt={`Image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                />
                <div className="font-[family-name:var(--font-geist-mono)] absolute top-4 left-4 text-white bg-black/60 px-2 py-1 rounded text-sm z-10">
                   Go to <b>{src.name}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  };