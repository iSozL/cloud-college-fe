import React from "react";
import TextBox from "../components/textBox/TextBox.jsx";
import "./createroom.css";
import Back from "../components/back/Back.jsx";
import Button from "../components/button/Button.jsx";
import InputLine from "../components/inputLine/InputLine.jsx";
class CreateRoom extends React.Component {
  render() {
    return (
      <div className="create-room-container">
        <div className="back">
          <Back />
        </div>
        <div className="text-box-container">
          <TextBox>
            <div className="title">房间创建表</div>
            <div className="room-container">
              <InputLine name="姓名" onChange={this.setName} />
              <div className="type">
                <div className="detail">
                  房间型号:
                  <div className="type-container">
                    <div>双人间</div>
                    <input
                      type="radio"
                      value="2"
                      name="type"
                      onChange={this.typeChange}
                    />
                  </div>
                  <div className="type-container">
                    <div>四人间</div>
                    <input
                      type="radio"
                      value="4"
                      name="type"
                      onChange={this.typeChange}
                    />
                  </div>
                </div>
              </div>
              <InputLine name="房间名称" onChange={this.setRoomname} />
              <InputLine name="房间密匙" onChange={this.setRoompassword} />
            </div>
            <img
              className="hummer"
              src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E9%94%A4%E5%AD%90.png"
            />
            <Button name="创建" />
          </TextBox>
        </div>
      </div>
    );
  }
}
export default CreateRoom;
