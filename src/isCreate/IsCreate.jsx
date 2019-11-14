import React from 'react';
import './iscreate.css'
import Button from '../components/button/Button.jsx'
class IsCreate extends React.Component {
  render() {
    return(
      <div className="iscreate-container">
        <div className="search">
          <img src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/search.png" />
        </div>
        <div className="user">
          <img src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/user.png" /> 
        </div>
        <div>
          <Button name="进入" />
        </div>
      </div>
    )
  }
}
export default IsCreate