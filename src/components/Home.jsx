import { useEffect, useState } from "react"
import ReactPlayer from "react-player";
import VideoPage from "./VideoPage";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

function Home() {

    const dispatch = useDispatch(
)




    const [videoFilePath, setVideoFilePath] = useState(null)
    const handleVideoUpload = (e) => {
        e.preventDefault()
        setVideoFilePath(URL.createObjectURL(e.target.files[0]))

    }
    const navigate = useNavigate()
    useEffect(() => {
        if (videoFilePath) {
            navigate("/videopage")
        }
        dispatch({ type: "SET_VIDEO", payload: videoFilePath })
    }, [videoFilePath])
    return (
        <div className="App">

            <h1>Upload file</h1>

            <input type="file" onChange={handleVideoUpload} />

            <div >
                {/* <VideoPage videoFilePath={videoFilePath} /> */}
                {/* <ReactPlayer url={videoFilePath} width="100%" height="100%" controls={true} /> */}

            </div>
        </div>
    );
}

export default Home;