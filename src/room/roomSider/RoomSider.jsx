import React from 'react';
import './roomSider.css'
function RoomSider() {
  const imgs = [
    {
      src: "https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E6%88%BF%E9%97%B4%E4%BF%A1%E6%81%AF.png"
    },
    {
      src: "https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E7%81%AF%E6%8C%89%E9%94%AE.png"
    },
    {
      src: "https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E9%9F%B3%E4%B9%90.png"
    },
    {
      src: "https://have-more-boiled-water.oss-cn-shanghai.aliyuncs.com/%E7%94%A8%E6%88%B7.png"
    }
  ]
  return(
    <div className="room-sider-container">
      { imgs.map((item, index) => (
        <img src={item.src} key={index} />
      )) }
    </div>
  )
}
export default RoomSider