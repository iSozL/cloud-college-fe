import React from "react";
import "./login.css";
import InputBox from "../components/inputBox/InputBox.jsx";
import Button from "../components/button/Button.jsx";
import TextBox from "../components/textBox/TextBox.jsx";
import { Link } from "react-router-dom";
import Api from "../utils/apiUtils.jsx"
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      email: "",
      confirmPassword: ""
    }
    this.setUsername = this.setUsername.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.confirmPassword = this.confirmPassword.bind(this)
    this.register = this.register.bind(this)
  }
  setUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  setEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  setPassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  confirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    })
  }
  register() {
    const registerMessage = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    if(this.state.password == this.state.confirmPassword) {
      Api.fetchData('/register', 'post', registerMessage).then(
        res => {
          if(res.status == 200) {
            console.log(res)
          }
        },
        error => {
          console.log(error)
        }
      )
    } else {
      console.log("输入的密码不一致")
    }
  }
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
            <InputBox placeholder="用户名" onChange={this.setUsername} />
            <InputBox placeholder="邮箱" onChange={this.setEmail} />
            <InputBox placeholder="密码" type="password" onChange={this.setPassword} />
            <InputBox placeholder="确认密码" type="password" onChange={this.confirmPassword} />
          </div>
          <Button name="注册" style={{ margin: "60px 0 0 0" }} onClick={this.register} />
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
