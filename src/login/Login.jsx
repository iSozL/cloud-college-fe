import React from "react";
import "./login.css";
import InputBox from "../components/inputBox/InputBox.jsx";
import Button from "../components/button/Button.jsx";
import TextBox from "../components/textBox/TextBox.jsx";
import { Link } from "react-router-dom";
class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <img
          src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E6%B3%A8%E5%86%8C.png"
          className="login-logo"
        />
        <TextBox width="70%">
          <div class="title">注册</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <InputBox placeholder="用户名" />
            <InputBox placeholder="邮箱" />
            <InputBox placeholder="密码" type="password" />
            <InputBox placeholder="确认密码" type="password" />
          </div>
          <Button name="注册" style={{ margin: "60px 0 0 0" }} />
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div
              style={{
                fontSize: "35px",
                margin: "40px 0 50px 0",
                color: "rgb(95, 122, 184)"
              }}
            >
              登录
            </div>
          </Link>
        </TextBox>
      </div>
    );
  }
}
export default Login;
