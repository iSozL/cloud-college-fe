import React from "react";
import "../app.css";
import TextBox from '../components/textBox/TextBox.jsx'
function Index() {
  return (
    <div className="index-container">
      <img
        src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E5%BC%80%E5%A7%8B.png"
        className="index-logo"
      />
      <TextBox width="60%">
      </TextBox>
    </div>
  );
}
export default Index;
