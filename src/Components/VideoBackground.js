import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ video_id }) => {
  // Fetch and use the trailer video
  useTrailerVideo({ Video_id: video_id });

  // Access trailer video from Redux store
  const trailerVideo = useSelector((state) => state.movies?.TrailerVideo);
// console.log(trailerVideo);

  // Handle undefined trailer video
  if (!trailerVideo) return null;

  return (
    <div  >
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;