import React from "react";
import TextBox from '../components/textBox/TextBox.jsx'
import "./userMsg.css"
import InputLine from '../components/inputLine/InputLine.jsx'
class UserMsg extends React.Component {
  render() {
    return (
      <div className="user-container">
        <TextBox width="80%" marginTop="200px">
          <img src={require('../assets/images/man.png')} className="user-img" />
          <div className="msg-container">
            <InputLine />
          </div>
        </TextBox>
      </div>
    );
  }
}
export default UserMsg;
