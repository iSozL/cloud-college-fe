import React from "react";
import "./room.css";
import RoomSider from "./roomSider/RoomSider.jsx";
import Back from "../components/back/Back.jsx";
import InputBox from "../components/inputBox/InputBox.jsx";
import Button from "../components/button/Button.jsx"
function Room() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100vw",
        height: "100vh"
      }}
    >
      <div className="room-container">
        <div className="room-back">
          <Back />
        </div>
        <div className="room-sider">
          <RoomSider />
        </div>
      </div>
      <div className="room-input">
        <InputBox style={{width: "100%", height: "100%"}} placeholder="输入文字" />
        <div className="room-button">
          <Button name="发送" />
        </div>
      </div>
    </div>
  );
}
export default Room;
