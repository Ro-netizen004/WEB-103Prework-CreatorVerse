import { Link } from "react-router";
import { supabase } from "../client";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaInstagram, FaYoutube, FaTiktok, FaTwitter, FaTrash, FaEdit } from "react-icons/fa";
import LoadingSpinner from "../components/LoadingSpinner";
import { useNavigate } from "react-router";
import { handleDelete } from "../utils/databasefuncs.js";

const CreatorPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);

  const handleDeleteClick = async () => {
  const error = await handleDelete(creator.id);
  if (!error) {
    navigate("/"); // Redirect to home page
  }
};
  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        console.error(error);
      } else {
        setCreator(data);
      }
    };
    getData();
  }, [id]);

  if (!creator)
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );

  return (
    <div className="min-h-screen relative text-white flex flex-col items-center px-6 py-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10 blur-md"
        style={{ backgroundImage: `url(${creator.imageURL})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10" />

      {/* Content Wrapper */}
      <div className="relative z-10 bg-black/50 rounded-2xl p-10 max-w-4xl w-full">

        {/* Top-right Edit & Delete Icons */}
            <div className="absolute top-6 right-6 flex gap-4 z-20">
            {/* Edit Icon with Tooltip */}
            <span className="relative group">
                <Link to={`/updatecreator/${id}`}>
                <FaEdit className="text-white text-xl cursor-pointer hover:text-yellow-400" />
                </Link>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                Edit
                </span>
            </span>

            {/* Delete Icon with Tooltip */}
            <span className="relative group">
                <FaTrash onClick ={handleDeleteClick}
                className="text-red-500 text-xl cursor-pointer hover:text-red-700"
                />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                Delete
                </span>
            </span>
            </div>

        {/* Back Arrow */}
        <Link
            to="/"
            className="absolute top-6 left-6 text-white font-bold py-2 px-4 rounded-full text-xl transition duration-300 flex items-center gap-2"
            >
            <span className="text-2xl">←</span>
            <span className="text-sm font-normal">Go back</span>
            </Link>

        {/* Profile Image */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white-500 shadow-lg mb-10 mx-auto mt-4">
          <img
            src={creator.imageURL}
            alt={creator.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Creator Info */}
        <div className="text-center">
          <h1 className="text-4xl md:text-3xl font-extrabold text-white-500">{creator.name}</h1>
          <p className="mt-4 text-md text-gray-300 font-semibold">{creator.category}</p>

          {/* Description & Socials */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mt-8 text-left">
            {/* Description + Channel Link */}
            <div className="md:w-1/2 text-gray-400">
              <p className="text-md md:text-md leading-relaxed">
                {creator.description}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4 md:w-1/2">
              {creator.instagram && (
                <a
                  href={creator.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center gap-3 text-pink-500 hover:scale-105 transition-transform text-3md break-all"
                >
                  <FaInstagram />
                  <span>{creator.instagram}</span>
                </a>
              )}
              {creator.youtube && (
                <a
                  href={creator.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex items-center gap-3 text-red-600 hover:scale-105 transition-transform text-3md break-all"
                >
                  <FaYoutube />
                  <span>{creator.youtube}</span>
                </a>
              )}
              {creator.tiktok && (
                <a
                  href={creator.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex items-center gap-3 text-gray-300 hover:scale-105 transition-transform text-3md break-all"
                >
                  <FaTiktok />
                  <span>{creator.tiktok}</span>
                </a>
              )}
              {creator.twitter && (
                <a
                  href={creator.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex items-center gap-3 text-blue-400 hover:scale-105 transition-transform text-3md break-all"
                >
                  <FaTwitter />
                  <span>{creator.twitter}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorPage;
