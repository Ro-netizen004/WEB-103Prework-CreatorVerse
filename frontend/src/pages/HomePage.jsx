
import Navbar from "../components/Navbar";
import { Link } from "react-router";
import FeaturedSection from "./FeaturedSection";

const HomePage = ({setCreatorData}) => {

  const scrollToFavorites = () => {
    const element = document.getElementById("favorites");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <Navbar />

      {/* Main container with flex for md and above */}
      <div
        className="min-h-screen flex flex-col md:flex-row px-4 relative"
        style={{
          backgroundImage: `url('/image_V4.gif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/70 backdrop-blur-sm z-0" />

      {/* Hero section */}
      <div id="home" className="relative md:w-[70%] flex items-center justify-center text-white z-10 px-6 py-12 min-h-[400px] pt-28">
        <div className="max-w-xl text-center md:text-left animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold flex flex-wrap justify-center md:justify-start items-center gap-3 mb-4">
            <span className="text-red-500 drop-shadow-lg">Creator</span>
            <span className="bg-red-600 text-white px-3 py-1 rounded-md shadow-md">
              Verse
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-100 mb-2 tracking-wide">
            Discover. Curate. Celebrate.
          </h2>

          <p className="text-base md:text-lg text-gray-300 max-w-md leading-relaxed mb-8">
            A polished directory of top YouTubers — explore, manage, and showcase
            your favorite creators from across the platform.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button
              className="bg-red-600 text-white px-6 py-3 rounded-md text-sm font-semibold shadow-md hover:bg-red-700 transition duration-300"
              onClick={scrollToFavorites}
            >
              View Favorites
            </button>
            <Link
              to="/addcreator"
              className="bg-white text-red-600 px-6 py-3 rounded-md text-sm font-semibold shadow-md hover:bg-gray-200 transition duration-300"
            >
              Add a Creator
            </Link>
              
          </div>
        </div>
          
      </div>
      <FeaturedSection setCreatorData = {setCreatorData}/>

    </div>
  </>
  );
};

export default HomePage;


