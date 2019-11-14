import React from 'react';
import "./create.css"
import Button from '../components/button/Button.jsx'
class Create extends React.Component {
  render() {
    return (
      <div className="create-container">
        <div className="search">
          <img src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/search.png" />
        </div>
        <div className="user">
          <img src="https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/user.png" /> 
        </div>
        <div>
          <Button name="创建" />
        </div>
      </div>
    )
  }
}
export default Create