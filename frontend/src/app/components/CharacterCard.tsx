import { useState } from "react";
import { People } from "../models/People";
import { toIconName } from "../utils/Utils";
import PeopleComponent from "./PeopleComponent";



interface CharacterCardProps {
    char: People;
  }

export const CharacterCard: React.FC<CharacterCardProps> = ({ char }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }
  
  return (
    <>
        <div
          key={char.name}
          className="group block rounded overflow-hidden shadow-lg border border-gray-700 transition-transform hover:scale-105 bg-[#1c1c1c]"
        >
          <div
            className="h-[30%] aspect-[4/3] w-full"
            style={{
              backgroundColor: "#333",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              paddingLeft: "1rem"
            }}
          >
            <i className={`swg swg-${toIconName(char.name)} text-[5rem] text-gray-400`}
              style={{ fontSize: '2rem', lineHeight: 1 }}
              aria-label={char.name}/>
          </div>

          
          <div className="px-4 py-3 h-[70%] text-white bg-[#1c1c1c]">
            <div className="font-bold text-base">{char.name}</div>
            <button
            onClick={toggleModal}
            className="self-start mt-2 inline-block bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium px-4 py-1 rounded-sm transition-transform hover:scale-105"
          >
            View details
          </button>
          </div>
        </div>
        {/* Modal */}
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
            <p className="text-gray-700">
              <PeopleComponent character={char} />
            </p>
          </div>
        </div>
      )}
</>
  );
  };