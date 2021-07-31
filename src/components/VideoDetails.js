import React from "react";

const VideoDetails = (props) => {
  if (props.selectedVideo) {
    let data = props.selectedVideo.data;
    if (props.selectedVideo.player === "youtube") {
      let url = `https://www.youtube.com/embed/${data.id.videoId}`;
      return (
        <div>
          <div className="ui embed">
            <iframe src={url} title={data.snippet.title} />
          </div>
          <div className="ui segment" style={{ backgroundColor: "pink" }}>
            <h4 className="ui header">{data.snippet.title}</h4>
            <p>{data.snippet.description}</p>
          </div>
        </div>
      );
    } else {
      let txt = data.uri;
      let numb = txt.match(/\d/g);
      numb = numb.join("");
      return (
        <div>
          <div className="ui embed">
            <iframe
              src={`https://player.vimeo.com/video/${numb} `}
              width={data.width}
              height={data.height}
              frameBorder="0"
              title={data.name}
              allowFullScreen
            ></iframe>
          </div>
          <div
            className="ui segment"
            style={{ backgroundColor: "rgb(22, 167, 224)" }}
          >
            <h4 className="ui header">{data.name}</h4>
            <p>{data.description}</p>
          </div>
        </div>
      );
    }
  } else {
    return <div></div>;
  }
};

export default VideoDetails;
