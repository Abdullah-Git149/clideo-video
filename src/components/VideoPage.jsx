import ReactPlayer from "react-player";

const VideoPage = ({ videoFilePath }) => {
    return (
        <>
            <h1>Video page</h1>
            <ReactPlayer url={videoFilePath} width="100%" height="100%" controls={true} />
        </>);
}

export default VideoPage;