import React from "react";
import "./search.css"
import Button from "../components/button/Button.jsx"
class Search extends React.Component {
  render() {
    return (
      <div className="search-container">
        <input className="search-input" placeholder="请输入房间号"></input>
        <Button name="搜索" style={{width: "18%", marginTop: "10%"}} />
      </div>
    );
  }
}
export default Search;
