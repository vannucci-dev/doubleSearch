import React from "react";
import VideoItemV from "./VideoItemV";

const VideoListV = (props) => {
  const renderedList = props.list.map((video) => {
    return (
      <VideoItemV
        onVideoSelect={props.onVideoSelect}
        videoDetails={video}
        key={video.uri}
      />
    );
  });

  return (
    <div style={{ position: "relative" }}>
      <img
        className="vimeo-img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Vimeo_Logo.svg/1280px-Vimeo_Logo.svg.png"
        alt="viemo-logo"
      />
      <div className="ui relaxed divided list">{renderedList}</div>
    </div>
  );
};

export default VideoListV;
