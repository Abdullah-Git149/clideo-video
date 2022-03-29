import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import ReactPlayer from "react-player";
import VideoPage from "./components/VideoPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/videopage" element={<VideoPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
