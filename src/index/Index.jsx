import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Button from "../components/button/Button.jsx";
function Index() {
  return (
    <div className="index-container">
      <img
        src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E5%BC%80%E5%A7%8B.png"
        className="index-logo"
      />

      <Link to="/login" style={{ textDecoration: "none" }}>
        <Button name="登录" style={{ margin: "200px 0 0 0" }} />
      </Link>
      <Link to="/register" style={{ textDecoration: "none" }}>
        <Button name="注册" style={{ margin: "50px 0 0 0" }} />
      </Link>
      <Link to="/forget" style={{ textDecoration: "none" }}>
        <div
          style={{
            fontSize: "40px",
            marginTop: "40px",
            color: "rgb(95, 122, 184)"
          }}
        >
          忘记密码?
        </div>
      </Link>
    </div>
  );
}
export default Index;
