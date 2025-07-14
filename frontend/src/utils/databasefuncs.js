import toast from "react-hot-toast";
import { supabase } from "../client";

export const handleDelete = async (id) => {
    const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', id);  // match by id

        if (error) {
            console.error("Delete error:", error);
            toast.error("Error deleting creator")
        }
        else{
            toast.success("Creator deleted successfully!")
        }
    };

export const handleAdd = async(creatorData) => {
    const { data, error } = await supabase.from("creators").insert([creatorData]);

    if (error) {
      console.error("Insert error:", error);
    } else {
      console.log("Creator added!", data);
      toast.success('Creator added successfully!');
    }
}

export async function checkIfCreatorExists(id) {
  const { data, error } = await supabase
    .from("creators")
    .select("id")
    .eq("id", id)
    .single(); 

  if (error) {
    if (error.code === "PGRST116") {
      // no rows found
      return false;
    }
    console.error("Error checking for creator:", error);
    return false;
  }

  return !!data;
}

export const fetchCreators = async() => {
    const { data, error } = await supabase
        .from('creators')   
        .select('*');       

    if (error) {
        console.error('Error fetching creators:', error);
        return [];
    }
     return data;
};