import React from "react";
import "../app.css";
import TextBox from "../components/textBox/TextBox.jsx";
import Button from "../components/button/Button.jsx";
import InputBox from "../components/inputBox/InputBox.jsx";
function Index() {
  return (
    <div className="index-container">
      <img
        src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E5%BC%80%E5%A7%8B.png"
        className="index-logo"
      />
      <Button name="登录" style={{ margin: "200px 0 0 0" }} />
      <Button name="注册" style={{ margin: "50px 0 0 0" }} />
      <div
        style={{
          fontSize: "40px",
          marginTop: "40px",
          color: "rgb(95, 122, 184)"
        }}
      >
        忘记密码?
      </div>
    </div>
  );
}
export default Index;
