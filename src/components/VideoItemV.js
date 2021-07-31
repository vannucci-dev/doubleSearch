import React from "react";

const VideoItemV = (props) => {
  console.log(props.videoDetails.pictures);
  return (
    <div
      className=" video-item item"
      onClick={() =>
        props.onVideoSelect({ player: "vimeo", data: props.videoDetails })
      }
    >
      <img
        className=" ui image"
        alt={props.videoDetails.name}
        src={props.videoDetails.pictures.sizes[0].link}
      />
      <div className="content">
        <div className="header">{props.videoDetails.name}</div>
        <div className="description">
          {props.videoDetails.description.substring(0, 50) + "..."}
        </div>
      </div>
    </div>
  );
};

export default VideoItemV;
