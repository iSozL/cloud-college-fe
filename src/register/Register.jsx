import React from "react";
import "./register.css";
import InputBox from "../components/inputBox/InputBox.jsx";
import Button from "../components/button/Button.jsx";
import TextBox from "../components/textBox/TextBox.jsx";
class Rigster extends React.Component {
  render() {
    return (
      <div className="register-container">
        <img
          src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E5%BC%80%E5%A7%8B.png"
          className="register-logo"
        />
        <TextBox width="70%">
          <div class="title">登录</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <InputBox placeholder="用户名/邮箱" />
            <InputBox placeholder="密码" type="password" />
            <div
              style={{
                alignSelf: "flex-end",
                fontSize: "35px",
                marginTop: "40px",
                color: "rgb(95, 122, 184)"
              }}
            >
              忘记密码?
            </div>
          </div>
          <Button name="登录" style={{ margin: "240px 0 100px 0" }} />
        </TextBox>
      </div>
    );
  }
}
export default Rigster;
