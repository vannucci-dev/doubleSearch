import React from "react";
import VideoItemY from "./VideoItemY";

const VideoListY = (props) => {
  const renderedList = props.list.map((video) => {
    return (
      <VideoItemY
        onVideoSelect={props.onVideoSelect}
        videoDetails={video}
        key={video.id.videoId}
      />
    );
  });

  return (
    <div style={{ position: "relative" }}>
      <img
        className="youtube-img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
        alt="youtube-logo"
      />
      <div className="ui relaxed divided list">{renderedList}</div>
    </div>
  );
};

export default VideoListY;
