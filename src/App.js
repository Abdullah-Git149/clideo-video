import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import ReactPlayer from "react-player";
import VideoPage from "./components/VideoPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import Store from './store';
import { Provider } from "react-redux"
function App() {

  return (
    <div className="App">
      <Provider store={Store}>

        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/videopage" element={<VideoPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
