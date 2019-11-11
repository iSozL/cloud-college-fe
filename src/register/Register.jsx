import React from "react";
import './register.css'
class Rigster extends React.Component {
  render() {
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
    </TextBox>;
  }
}
export default Rigster