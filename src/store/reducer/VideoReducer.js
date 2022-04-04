const initState = {
    video: null
}

const VideoReducer = (state = initState, action) => {
    if (action.type === "SET_VIDEO") {
        return { ...state, video: action.payload }
    } else {
        return state
    }
}
export default VideoReducer