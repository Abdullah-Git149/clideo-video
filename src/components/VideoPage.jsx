import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";

const VideoPage = ({ videoFilePath }) => {
    const { video } = useSelector((state) => state.VideoReducer);
    console.log("in b", video);
    console.log(videoFilePath);
    return(
        <>
            <h1>Video page</h1>
            <ReactPlayer url={video} width="100%" height="100%" controls={true} />
        </>
    );
}

export default VideoPage;