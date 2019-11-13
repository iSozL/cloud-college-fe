import React from "react";
import TextBox from "../components/textBox/TextBox.jsx";
import "./userMsg.css";
import InputLine from "../components/inputLine/InputLine.jsx";
import Button from "../components/button/Button.jsx";
import "antd/lib/message/style/index.css";
import message from "antd/lib/message/index.js";
import Api from '../utils/apiUtils.jsx'
class UserMsg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: "",
      nickname: "",
      signature: "",
      birthday: ""
    };
    this.sexChange = this.sexChange.bind(this)
    this.setNickname = this.setNickname.bind(this)
    this.setSignature = this.setSignature.bind(this)
    this.setBirthday = this.setBirthday.bind(this)
    this.submit = this.submit.bind(this)
  }
  sexChange(e) {
    this.setState({
      sex: e.target.value
    });
  }
  setNickname(e) {
    this.setState({
      nickname: e.target.value
    });
  }
  setBirthday(e) {
    this.setState({
      birthday: e.target.value
    });
  }
  setSignature(e) {
    this.setState({
      signature: e.target.value
    });
  }
  submit() {
    if(this.state.nickname && this.state.birthday && this.state.signature && this.state.sex) {
      const userMsg = {
        nickname: this.state.nickname,
        birthday: this.state.birthday,
        signature: this.state.signature,
        sex: this.state.sex
      }
      console.log(userMsg)
      Api.fetchData('/usermsg', 'post', userMsg).then(
        res => {
          if(res.status == 200) {
            if(res.data.status == 1){
              message.success(res.data.message)
            } else {
              message.error(res.data.message)
            }
          } else {
            message.error("请求失败")
          }
        },
        error => {
          message.error(error)
        }
      )
    } else {
      message.info("输入不完整")
    }
  }
  render() {
    return (
      <div className="user-container">
        <TextBox width="80%" marginTop="250px">
          <img src={require("../assets/images/man.png")} className="user-img" />
          <div className="msg-container">
            <InputLine name="昵称" onChange={this.setNickname} />
            <div className="sex">
              <div className="sex-detail">
                性别:
                <div><input type="radio" value="man" name="sex" onChange={this.sexChange} />男</div>
                <div><input type="radio" value="woman" name="sex" onChange={this.sexChange} />女</div>
              </div>
            </div>
            <InputLine name="生日" onChange={this.setBirthday} />
            <InputLine name="个性签名" onChange={this.setSignature} />
          </div>
          <Button name="提交" style={{ margin: "200px 0 50px 0" }} onClick={this.submit}></Button>
        </TextBox>
      </div>
    );
  }
}
export default UserMsg;
