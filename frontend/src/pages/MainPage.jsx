import HomePage from "./HomePage";
import Favorites from "./Favorites";
import { fetchCreators } from "../utils/databasefuncs.js";
import { useEffect, useState } from "react";
import Footer from "./Footer.jsx";

const MainPage = () => {
  const [creatorData, setCreatorData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function loadData()
      {
        setIsLoading(true);
        const data = await fetchCreators();
        setCreatorData(data);
        setIsLoading(false);
      }
      loadData();
  }, []);
  return (
    <div>
      <HomePage setCreatorData = {setCreatorData} />
      <Favorites creatorData = {creatorData} isLoading = {isLoading} setCreatorData = {setCreatorData}/>
      <Footer />
    </div>
    
  )
}

export default MainPage
