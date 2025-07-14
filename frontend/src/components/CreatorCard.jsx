import { FaInstagram, FaYoutube, FaTiktok, FaTwitter, FaEdit, FaTrash, FaInfoCircle} from 'react-icons/fa';
import { Link } from 'react-router';
import { supabase } from '../client';
import toast from 'react-hot-toast';

const CreatorCard = ({
    id,
  name,
  category,
  url,
  imageURL,
  description,
  twitter,
  instagram,
  youtube,
  tiktok,
  onDelete
}) => {
    

    const handleDelete = async () => {
    const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', id);  // match by id

        if (error) {
            console.error("Delete error:", error);
            toast.error("Failed to delete.");
        } else {
            toast.success("Deleted successfully!");
            onDelete(id);
        }
    };

    let image = ""
    if(imageURL){
        image = imageURL;
    }
    else{
        image = "https://media.wired.com/photos/631277a6ba2a66af641b132a/16:9/w_2400,h_1350,c_limit/YouTube-Premium-Perks-Gear-Alamy-2F8A813.jpg"
    }
  return (
    
    <div
      className="w-full sm:w-[20rem] md:w-[24rem] lg:w-[28rem] xl:w-[32rem] border-2 border-red-600 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay to make text readable */}
      <div className="bg-black/70 w-full h-full p-4">
        <h3 className="text-2xl font-bold text-red-500 mb-2 flex justify-between items-center">
          <span>
            {name}
            <span className="ml-2 inline-block text-white text-xs font-normal">
              {category}
            </span>
          </span>

          <span className="flex gap-4 text-xl">
            {/* Info Icon with Tooltip */}
            <span className="relative group">
                <Link to={`/getcreator/${id}`}>
                <FaInfoCircle className="cursor-pointer text-white " />
                </Link>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                Info
                </span>
            </span>

            {/* Edit Icon with Tooltip */}
            <span className="relative group">
                <Link to={`/updatecreator/${id}`}>
                <FaEdit className="cursor-pointer hover:text-yellow-400" />
                </Link>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                Edit
                </span>
            </span>

            {/* Delete Icon with Tooltip */}
            <span className="relative group">
                <FaTrash onClick={handleDelete} className="cursor-pointer hover:text-red-600" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                Delete
                </span>
            </span>
            </span>
        </h3>

        <p className="text-gray-300 mb-4">{description}</p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-xl mb-4">
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 hover:scale-110 transition" />
            </a>
          )}
          {youtube && (
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-500 hover:scale-110 transition" />
            </a>
          )}
          {tiktok && (
            <a href={tiktok} target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-gray-400 hover:scale-110 transition" />
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 hover:scale-110 transition" />
            </a>
          )}
        </div>

        {/* CTA */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Visit Channel
        </a>
      </div>
    </div>
  );
};

export default CreatorCard;


