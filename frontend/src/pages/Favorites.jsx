import CreatorCard from "../components/CreatorCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router";
import { useState } from "react";

const Favorites = ({creatorData, isLoading, setCreatorData}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const term = searchTerm.toLowerCase();
  const filteredData = searchTerm
  ? creatorData.filter((creator) =>
      creator.name.toLowerCase().includes(term) ||
      creator.category.toLowerCase().includes(term) 
    )
  : creatorData;


  const creatorContent = filteredData.map((item) => (
    <CreatorCard 
      key={item.id}
      id={item.id}
      name = {item.name}
      category = {item.category}
      url = {item.url}
      imageURL = {item.imageURL}
      description = {item.description}
      twitter = {item.twitter}
      instagram = {item.instagram}
      youtube = {item.youtube}
      tiktok = {item.tiktok}
      onDelete={(id) => {
        setCreatorData(prev => prev.filter(item => item.id !== id));
      }}  
    />
    )
  )

  return (
    <section
      id="favorites"
      className="min-h-screen bg-black text-white px-6 py-20"
      style={{ scrollMarginTop: "120px" }}
    >
        {/* Search Bar */}
          <div className="w-full max-w-2xl mx-auto mb-10">
            <input
              type="text"
              placeholder="Search creators..."
              className="w-full px-6 py-3 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              value = {searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        {isLoading && <LoadingSpinner />}
        {!isLoading && creatorData.length === 0 && (
        <div className="mt-10 flex justify-center">
          <div className="border border-gray-600 rounded-xl p-8 w-full max-w-lg bg-black/40 backdrop-blur-sm shadow-lg text-center text-gray-300 flex flex-col items-center gap-6">
            <p className="text-lg font-semibold">
              You haven&apos;t added any creators yet.
            </p>
            <Link
              to="/addcreator"
              className="bg-red-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md hover:bg-red-700 transition duration-300"
            >
              Add Your First Creator
            </Link>
          </div>
        </div>
      )}


        {creatorData.length > 0 && !isLoading &&
        <div 
            className={`flex flex-wrap justify-center gap-8 transition-opacity duration-900 ease-in-out ${
            creatorData.length > 0 ? 'opacity-100' : 'opacity-0'
        }`}>
            {creatorContent}
        </div>
        }
    </section>
  );
};

export default Favorites;
