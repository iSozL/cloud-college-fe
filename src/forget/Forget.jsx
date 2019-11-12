import React from "react";
import "./forget.css";
import InputBox from "../components/inputBox/InputBox.jsx";
import Button from "../components/button/Button.jsx";
import TextBox from "../components/textBox/TextBox.jsx";
import {Link} from "react-router-dom"
class Forget extends React.Component {
  render() {
    return (
      <div className="register-container">
        <img
          src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E5%BF%98%E8%AE%B0%E5%AF%86%E7%A0%81.png"
          className="register-logo"
        />
        <TextBox width="70%">
          <div class="title">忘记密码</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <InputBox placeholder="用户名" />
            <InputBox placeholder="邮箱" />
            <div
              style={{
                alignSelf: "flex-end",
                fontSize: "35px",
                marginTop: "40px"
              }}
            >
              <Link to="/" style={{color: "rgb(95, 122, 184)", textDecoration: "none"}}>返回</Link>
            </div>
          </div>
          <Button name="发送验证" style={{ margin: "240px 0 100px 0" }} />
        </TextBox>
      </div>
    );
  }
}
export default Forget;
