import { featuredCreators } from "../featured/featured";
import FeaturedCreator from "../components/FeaturedCreator.jsx";

const FeaturedSection = ({ setCreatorData }) => {
  
  const creatorsArray = featuredCreators.map((creator) => (
    <FeaturedCreator
      key={creator.id}
      src={creator.imageURL}
      alt={creator.name}
      name={creator.name}
      category={creator.category}
      creator={creator}
      onDelete={(id) => {
        setCreatorData((prev) => prev.filter((item) => item.id !== id));
      }}
      onAdd={() => {
        setCreatorData((prev) => [...prev, creator]);
      }}
    />
  ));

  return (
    <div className="relative md:w-[40%] md:h-screen z-10 px-6 py-12 text-white flex flex-col pt-20">
      <h3 className="text-2xl font-normal mb-6 text-center md:text-left">
        Featured Creators
      </h3>

      <div
        className="flex md:flex-col gap-6 overflow-y-auto flex-1 scroll-smooth custom-scrollbar"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {creatorsArray}
      </div>
    </div>
  );
};

export default FeaturedSection;

