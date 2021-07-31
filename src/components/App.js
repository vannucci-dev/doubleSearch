import React from "react";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import VideoListY from "./VideoListY";
import VideoListV from "./VideoListV";
import Youtube from "../API/Youtube";
import Vimeo from "../API/Vimeo";
import "../css/app.css";

class App extends React.Component {
  state = { queryYoutube: [], queryVimeo: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const responseYoutube = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });

    const responseVimeo = await Vimeo.get("/videos", {
      params: {
        query: term,
      },
    });

    this.setState({
      queryVimeo: responseVimeo.data.data,
      queryYoutube: responseYoutube.data.items,
      selectedVideo: {
        player: "youtube",
        data: responseYoutube.data.items[0],
      },
    });
  };

  onVideoSelect = (item) => {
    this.setState({ selectedVideo: item });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="four wide column">
              <VideoListV
                onVideoSelect={this.onVideoSelect}
                list={this.state.queryVimeo}
              />
            </div>
            <div className="eight wide column">
              <VideoDetails selectedVideo={this.state.selectedVideo} />
            </div>
            <div className="four wide column">
              <VideoListY
                onVideoSelect={this.onVideoSelect}
                list={this.state.queryYoutube}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
