import React from "react";
import Back from "../components/back/Back.jsx";
import TextBox from "../components/textBox/TextBox.jsx";
import Button from "../components/button/Button.jsx"
import "./roomMsg.css";
function RoomMsg() {
  return (
    <div className="users-container">
      <div className="users-back">
        <Back />
      </div>
      <div className="users-textbox-container">
        <TextBox>
          <div className="room-msg-container">
            <div className="room-title">—房间信息—</div>
            <div className="room-body">
              <div>寝室名：xxxx</div>
              <div>寝室号：xxxx</div>
              <div>
                <div>室友(入驻天数)</div>
                <div>1(1)</div>
                <div>1(1)</div>
                <div>1(1)</div>
                <div>1(1)</div>
              </div>
              <div>房间状态：已满</div>
              <div>房间型号：四人房</div>
              <div>创建天数：100天</div>
              <div>房间密匙：xxxxx</div>
            </div>
            <div className="room-button">
              <Button name="退房" />
              <Button name="更改" />
            </div>
          </div>
        </TextBox>
      </div>
    </div>
  );
}
export default RoomMsg;
