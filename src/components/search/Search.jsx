import React from "react";
import "./search.css";
class Search extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <input className="input" placeholder="输入搜索房间号"></input>
      </div>
    );
  }
}
export default Search;
