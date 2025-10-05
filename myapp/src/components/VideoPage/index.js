import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import htmlTopics from "../data/HtmlTopics";
import cssTopics from "../data/CssTopics";
import jsTopics from "../data/JsTopics";

import "./index.css";

const VideoPage = () => {
  const { courseName } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  let topics = [];
  if (courseName === "html") topics = htmlTopics;
  else if (courseName === "css") topics = cssTopics;
  else if (courseName === "javascript") topics = jsTopics;

  return (
    <>
      <Navbar />
      <div className="video-page-container">
        <aside className={`video-sidebar ${sidebarVisible ? "show" : ""}`}>
          <div className="topic-container">
            <h3 className="topic-heading">{courseName.toUpperCase()} Topics</h3>{" "}
            <MdOutlineKeyboardArrowLeft
              className="right-arrow"
              onClick={() => setSidebarVisible(!sidebarVisible)}
            />
          </div>

          <hr className="harizantal-line" />
          <ul>
            {topics.map((topic, idx) => (
              <li
                key={idx}
                className={selectedVideo?.title === topic.title ? "active" : ""}
                onClick={() => {
                  setSelectedVideo(topic);
                  setSidebarVisible(false); // auto-hide after selecting topic (mobile)
                }}
              >
                {topic.title}
              </li>
            ))}
          </ul>
        </aside>

        <main className="video-content">
          <button
            className="toggle-sidebar-btn"
            onClick={() => setSidebarVisible(!sidebarVisible)}
          >
            {sidebarVisible ? "Hide Topics" : "Show Topics"}
          </button>

          {selectedVideo ? (
            <div className="video-player">
              <h2>{selectedVideo.title}</h2>
              <div className="video-wrapper">
                <iframe
                  src={selectedVideo.url}
                  title={selectedVideo.title}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : (
            <p className="select-msg">Select a topic to start learning!</p>
          )}
        </main>
      </div>
    </>
  );
};

export default VideoPage;
