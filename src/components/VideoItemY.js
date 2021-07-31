import React from "react";

const VideoItemY = (props) => {
  return (
    <div
      className=" video-item item"
      onClick={() =>
        props.onVideoSelect({ player: "youtube", data: props.videoDetails })
      }
    >
      <img
        className=" ui image"
        src={props.videoDetails.snippet.thumbnails.default.url}
        alt={props.videoDetails.snippet.title}
        width="100px"
        height="75px"
      />
      <div className="content">
        <div className="header">
          {props.videoDetails.snippet.title.substring(0, 20) + "..."}
        </div>
        <div className="description">
          {props.videoDetails.snippet.description.substring(0, 50) + "..."}
        </div>
      </div>
    </div>
  );
};

export default VideoItemY;
