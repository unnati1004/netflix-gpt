import { useDispatch } from "react-redux";
import { API_options } from "../Components/constants";
import { useEffect } from "react";
import { addNowPlaying } from "../utils/movieSlice";

const useNowPlaying = ()=>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_options);
      const json = await data.json();
 
      dispatch(addNowPlaying(json.results))
    }
  
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
}
export default useNowPlaying;
