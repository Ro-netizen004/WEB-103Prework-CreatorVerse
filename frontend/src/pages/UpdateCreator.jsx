import { Link } from "react-router";
import { supabase } from "../client";
import LoadingSpinner from "../components/LoadingSpinner";
import { FaInstagram, FaYoutube, FaTiktok, FaTwitter, FaArrowCircleLeft } from 'react-icons/fa';
import toast from "react-hot-toast";
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';


const UpdateCreator = () => {

    const { id } = useParams();
    const [selectedData, setSelectedData] = useState(null)
    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select('*')
                .eq('id', id)
                .single();

            if (error) console.error(error);
            else setSelectedData(data);
        };

        fetchCreator();
  }, [id]);
  
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const creatorData = {
      name: formData.get("name"),
      url: formData.get("url"),
      description: formData.get("description"),
      imageURL: formData.get("imageURL"),
      category: formData.get("category"),
      twitter: formData.get("twitter"),
      instagram: formData.get("instagram"),
      tiktok: formData.get("tiktok"),
      youtube: formData.get("youtube"),
    };

    const { data, error } = await supabase.from("creators").update(creatorData).eq('id', id);

    if (error) {
      console.error("Update error:", error);
    } else {
      console.log("Creator updated!", data);
      toast.success('Creator updated successfully!');
      event.target.reset();
    }
  }

  return (
    <>
    
    <nav className="bg-black px-6 py-4 flex items-center">
        <Link to="/" className="text-2xl font-extrabold flex items-center gap-1 hover:opacity-80 transition-opacity duration-200">
          <span className="text-red-500">Creator</span>
          <span className="bg-red-600 text-white px-2 py-0.5 rounded-md">Verse</span>
        </Link>
        
    </nav>
      <div
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-cover bg-center text-white px-4 py-10 gap-8 bg-black mb-5"
      >
        
        {!selectedData && <LoadingSpinner />}

        {/* Form */}
        {selectedData && 
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-black/90 border-black-600 p-8 rounded-lg shadow-lg space-y-6 transition-all duration-500 ease-out transform hover:scale-[1.01] hover:shadow-red-500/30 mt-11"
        >
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <label htmlFor="name" className="block text-lg mb-1">Name *</label>
              <p className="text-sm text-gray-300 mb-1">Enter the creator's full name or channel name.</p>
              <input
                id="name"
                defaultValue={selectedData.name}
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded bg-white border border-red-600 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-lg mb-1">Category *</label>
              
              <p className="text-sm text-gray-300 mb-1">E.g., Gaming, Education, Comedy, Tech, etc.</p>
              <input
              defaultValue={selectedData.category}
                id="category"
                type="text"
                name="category"
                required
                className="w-full px-4 py-2 rounded bg-white border border-red-600 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label htmlFor="url" className="block text-lg mb-1">Main URL *</label>
              <p className="text-sm text-gray-300 mb-1">Paste the main profile link (e.g., YouTube, website).</p>
              <input
              defaultValue={selectedData.url}
                id="url"
                type="url"
                name="url"
                required
                placeholder="https://example.com/creator"
                className="w-full px-4 py-2 rounded bg-white border border-red-600 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label htmlFor="imageURL" className="block text-lg mb-1">Image URL (optional)</label>
              <p className="text-sm text-gray-300 mb-1">Add a square image link (ideal for profile display).</p>
              <input
              defaultValue={selectedData.imageURL}
                id="imageURL"
                type="url"
                name="imageURL"
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2 rounded bg-white border border-red-600 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Description spans full width */}
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-lg mb-1">Description *</label>
               <p className="text-sm text-gray-300 mb-1">Briefly describe the creator’s content and style. For example, mention the type of videos or posts they make,
                 their target audience, and what makes their content unique.</p>
              <textarea
              defaultValue={selectedData.description}
                id="description"
                name="description"
                required
                className="w-full px-4 py-2 rounded bg-white border border-red-600 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

    <fieldset className="md:col-span-2 border border-red-600 rounded p-4 space-y-4">
      <legend className="text-red-500 font-semibold mb-4 text-xl">Social Media Links (optional)</legend>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column: Twitter and Instagram */}
        <div className="space-y-4">
          <div>
            <label htmlFor="twitter" className="flex items-center gap-2 text-base mb-1 text-white">
              <FaTwitter className="text-4xl text-blue-500" />
              <span>Twitter</span>
            </label>
            <input
              id="twitter"
              type="url"
              name="twitter"
              defaultValue={selectedData.twitter}
              placeholder="https://twitter.com/username"
              className="w-full px-4 py-2 rounded bg-white border border-red-600 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="instagram" className="flex items-center gap-2 text-base mb-1 text-white">
              <FaInstagram className="text-4xl text-pink-500" />
              <span>Instagram</span>
            </label>
            
            <input
              id="instagram"
              type="url"
              name="instagram"
              defaultValue={selectedData.instagram}
              placeholder="https://instagram.com/username"
              className="w-full px-4 py-2 rounded bg-white border border-red-600 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Right column: TikTok and Twitch */}
        <div className="space-y-4">
          <div>
            <label htmlFor="tiktok" className="flex items-center gap-2 text-base mb-1 text-white">
              <FaTiktok className="text-4xl text-white-500" />
              <span>Tiktok</span>
            </label>
            
            <input
              id="tiktok"
              type="url"
              name="tiktok"
              defaultValue={selectedData.tiktok}
              placeholder="https://tiktok.com/@username"
              className="w-full px-4 py-2 rounded bg-white border border-red-600 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="youtube" className="flex items-center gap-2 text-base mb-1 text-white">
              <FaYoutube className="text-4xl text-red-500" />
              <span>YouTube</span>
            </label>
            <input
              id="youtube"
              type="url"
              name="youtube"
              defaultValue={selectedData.youtube}
              placeholder="https://youtube/username"
              className="w-full px-4 py-2 rounded bg-white border border-red-600 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
      </div>
    </fieldset>
          </div>

          <button
            type="submit"
            className="mb-1 w-full bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded font-semibold"
          >
            Submit
          </button>
         <Link
          to="/"
          className="w-full bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded font-semibold text-center mt-4 flex items-center justify-center"
        >
          <FaArrowCircleLeft className="mr-2"/>
          Back to Home
        </Link>
        </form>}
        

    
      </div>
    </>
  );
};

export default UpdateCreator;
