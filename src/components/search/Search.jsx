import React from "react";
import InputBox from "../inputBox/InputBox.jsx";
class Search extends React.Component {
  render() {
    return <InputBox placeholder="输入搜索房间号" style={{ width: "70%", height: "80px" }} />;
  }
}
export default Search;
