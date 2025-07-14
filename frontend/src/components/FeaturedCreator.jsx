
import { IoIosAddCircle } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { handleAdd, handleDelete, checkIfCreatorExists } from "../utils/databasefuncs.js";

const FeaturedCreator = ({ src, alt, name, category, creator, onDelete, onAdd }) => {
  const [toggleState, setToggleState] = useState("Add");

  const handleClick = async () => {
    if(toggleState === "Add"){
        handleAdd(creator);
        onAdd();
        setToggleState("Remove");
    }
    else if (toggleState === "Remove"){
        handleDelete(creator.id);
        onDelete(creator.id);
        setToggleState("Add");
    }
  };

  useEffect(() => {
    const checkExists = async() => {
        const exists = await checkIfCreatorExists(creator.id);
        if(exists){
            setToggleState("Remove");
        }
        else{
            setToggleState("Add");
        }
    }
    checkExists();
  }, [creator.id])

  return (
    <div
      className="snap-center bg-black rounded-lg p-4 shadow-lg hover:scale-105 transition-transform cursor-pointer flex-shrink-0 flex flex-col"
      style={{
        scrollSnapAlign: "center",
        height: "48vh",
        minHeight: "250px",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-2/3 object-cover rounded-md mb-3 flex-shrink-0"
      />
      <div className="flex items-baseline gap-3 mb-3">
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-gray-400 text-sm">{category}</p>
      </div>
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-red-700 transition duration-300 max-w-[100px]"
      >
        {toggleState === "Add" ? <IoIosAddCircle size={20} /> : <FaTrash size={20} />}
        {toggleState}
      </button>
    </div>
  );
};

export default FeaturedCreator;
