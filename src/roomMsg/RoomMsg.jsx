import React from "react";
import Back from "../components/back/Back.jsx";
import TextBox from "../components/textBox/TextBox.jsx"
import "./roomMsg.css"
function RoomMsg() {
  return (
    <div className="users-container">
      <div className="users-back">
        <Back />
      </div>
      <div className="users-textbox-container">
        <TextBox>
          <div>--</div>
        </TextBox>
      </div>
    </div>
  );
}
export default RoomMsg;
