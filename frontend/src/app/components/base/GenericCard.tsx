import { Colors } from "@/app/other/Colors";
import { toIconName } from "@/app/utils/Utils";
import { useState } from "react";
import FavoriteButton from "./FavoriteButton";

interface Item {
  name: string;
  url: string;
}

interface GenericCardProps<T extends Item> {
  item: T;
  renderDetails: (item: T) => React.ReactNode;
}

export function GenericCard<T extends Item>({
  item,
  renderDetails,
}: GenericCardProps<T>) {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <>
      <div
        key={item.name}
        className="group block rounded overflow-hidden shadow-lg border border-gray-700 transition-transform hover:scale-102 bg-[#1c1c1c] animate-fadeSlideUp"
      >
        <div
          className="h-[30%] aspect-[4/3] w-full"
          style={{
            backgroundColor: "#333",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            className="w-[80%] h-full flex justify-left items-center pl-[2rem]"
            style={{ backgroundColor: Colors.orange }}
          >
            <i
              className={`swg swg-${toIconName(item.name)} text-[5rem]`}
              style={{ fontSize: "2rem", lineHeight: 1, color: "#000" }}
              aria-label={item.name}
            />
          </div>
          <div
            className="w-[20%] h-full flex justify-center items-center"
            style={{ backgroundColor: Colors.red }}
          >
            <FavoriteButton itemId={item.url} />
          </div>
        </div>

        <div className="px-4 py-3 h-[70%] text-white bg-[#1c1c1c] relative font-[family-name:var(--font-geist-mono)]">
          <div className="text-xl">{item.name}</div>
          <button
            onClick={toggleModal}
            className="group absolute bottom-4 right-4 text-white text-sm font-medium px-4 py-2 rounded-sm transition-transform hover:scale-105 hover:cursor-pointer"
            style={{ backgroundColor: Colors.dark }}
          >
            <div className="relative w-full h-[4px] mb-1 rounded-full border border-cyan-400 overflow-hidden">
              <div className="absolute h-full bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 w-0 group-hover:w-full transition-all duration-300 ease-in" />
            </div>
            
            <span className="text-sm">View details</span>
          </button>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={toggleModal}
        >
          <div
            className="rounded-lg max-w-md w-full p-6 relative bg-gray-950"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            {renderDetails(item)}
          </div>
        </div>
      )}
    </>
  );
}