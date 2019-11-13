import React from "react";
import TextBox from '../components/textBox/TextBox.jsx'
import "./userMsg.css"
import InputLine from '../components/inputLine/InputLine.jsx'
import Button from '../components/button/Button.jsx'
class UserMsg extends React.Component {
  render() {
    return (
      <div className="user-container">
        <TextBox width="80%" marginTop="250px">
          <img src={require('../assets/images/man.png')} className="user-img" />
          <div className="msg-container">
            <InputLine name="昵称:" />
            <div className="sex">
              <div className="sex-detail">性别:</div>
            </div>
            <InputLine name="生日:" />
            <InputLine name="个性签名:" />
          </div>
          <Button name="提交" style={{margin: "200px 0 50px 0"}}></Button>
        </TextBox>
      </div>
    );
  }
}
export default UserMsg;
