import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlaying);
  if (!movies) return null;
  const mainMovie = movies[0];
  const { original_title, overview,id } = mainMovie;
  // console.log(id);
  

  return (
    <div className="w-screen aspect-video">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground video_id={id}/>
    </div>
  );
};

export default MainContainer;
