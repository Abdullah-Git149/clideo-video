
import { useEffect, useState } from "react"
import ReactPlayer from "react-player";
import VideoPage from "./VideoPage";
import { useNavigate } from "react-router-dom"
function Home() {
    const [videoFilePath, setVideoFilePath] = useState(null)
    const handleVideoUpload = (e) => {
        e.preventDefault()
        setVideoFilePath(URL.createObjectURL(e.target.files[0]))
    }
    const navigate = useNavigate()
    useEffect(() => {
        if (!setVideoFilePath === null) {
            navigate("/videopage")
        }
    }, [videoFilePath])
    return (
        <div className="App">

            <h1>Upload file</h1>

            <input type="file" onChange={handleVideoUpload} />


            <div >
                <VideoPage videoFilePath={videoFilePath} />
                {/* <ReactPlayer url={videoFilePath} width="100%" height="100%" controls={true} /> */}

            </div>
        </div>
    );
}

export default Home;
