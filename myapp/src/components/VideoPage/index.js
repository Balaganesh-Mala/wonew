import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { TbArrowNarrowRight } from "react-icons/tb";

import htmlTopics from "../data/HtmlTopics";
import cssTopics from "../data/CssTopics";
import jsTopics from "../data/JsTopics";
import pythonTopics from "../data/PythonTopics";

import "./index.css";

const VideoPage = () => {
  const { courseName } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  let topics = [];
  if (courseName === "html & css") topics = htmlTopics;
  else if (courseName === "responsive website") topics = cssTopics;
  else if (courseName === "javascript") topics = jsTopics;
  else if (courseName === "python") topics = pythonTopics;

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
                  setSidebarVisible(false);
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
            <div>
              <p className="select-msg">Select a topic to start learning!</p>
              <ul className="topics-container">
                {topics.map((topic, idx) => (
                  <li
                    key={idx}
                    className="topics-card"
                    onClick={() => {
                      setSelectedVideo(topic);
                      setSidebarVisible(false);
                    }}
                  >
                    <img
                      src="https://ik.imagekit.io/izqq5ffwt/video-media-player-flat-black-style.png"
                      alt=""
                      className="video-player-img"
                    />
                    
                    <div className="video-topic-card">
                      <h1 className="topic-name">{topic.title}</h1>
                      <button type="button" className="view-btn">
                        <p>view</p> <TbArrowNarrowRight />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default VideoPage;
