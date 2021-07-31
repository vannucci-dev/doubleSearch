import React from "react";
class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div style={{ marginBottom: "20px" }}>
        <h1 className="title">
          Double<span>Search</span>
        </h1>
        <div className="ui fluid icon input centered">
          <form
            onSubmit={this.onFormSubmit}
            className="ui form"
            style={{ width: "100%" }}
          >
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
            <input type="submit" style={{ display: "none" }} />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
