import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_options } from "../Components/constants";
import { useEffect } from "react";

const useTrailerVideo = ({Video_id}) => {
  const dispatch = useDispatch();

  const getmovieVideo = async () => {
    const movieVideo = await fetch(
      `https://api.themoviedb.org/3/movie/${Video_id}/videos?language=en-US`,
      API_options
    );

    const JSON = await movieVideo.json();
    const FilterData = JSON.results.filter((video) => video.type == "Trailer");
    const trailer = FilterData.length !== 0 ? FilterData[0] : JSON.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getmovieVideo();
  }, []);
};
export default useTrailerVideo;
