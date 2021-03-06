import React from "react";
import "./register.css";
import InputBox from "../components/inputBox/InputBox.jsx";
import Button from "../components/button/Button.jsx";
import TextBox from "../components/textBox/TextBox.jsx";
import { Link } from "react-router-dom";
import Api from "../utils/apiUtils.jsx";
import "antd/lib/message/style/index.css";
import message from "antd/lib/message/index.js";
class Rigster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.getUsername = this.getUsername.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.login = this.login.bind(this);
  }
  getUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  getPassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  login() {
    if (this.state.username && this.state.password) {
      const user = {
        username: this.state.username,
        password: this.state.password
      };
      Api.fetchData("/login", "post", user).then(
        res => {
          if (res.status == 200) {
            if (res.data.status == 1) {
              message.success(res.data.message);
            } else {
              message.error(res.data.message);
            }
          }
        },
        error => {
          message.error(error);
        }
      );
    } else {
      message.info("请输入完整");
    }
  }
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
            <InputBox placeholder="用户名" onChange={this.getUsername} />
            <InputBox
              placeholder="密码"
              type="password"
              onChange={this.getPassword}
            />
            <div
              style={{
                alignSelf: "flex-end",
                fontSize: "35px",
                marginTop: "40px"
              }}
            >
              <Link
                to="/forget"
                style={{ textDecoration: "none", color: "rgb(95, 122, 184)" }}
              >
                忘记密码?
              </Link>
            </div>
          </div>
          <Button
            name="登录"
            style={{ margin: "240px 0 100px 0" }}
            onClick={this.login}
          />
        </TextBox>
      </div>
    );
  }
}
export default Rigster;
