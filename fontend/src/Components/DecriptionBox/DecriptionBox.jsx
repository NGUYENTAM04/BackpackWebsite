import React from 'react'
import './DecriptionBox.css'

const DecriptionBox = () => {
  return (
    <div>
      <div className="descriptionbox">
          <div className="descriptionbox-navigator">
              <div className="descriptionbox-nav-box">Mô tả</div>
              <div className="descriptionbox-nav-box fade">Đánh giá</div>
          </div>
          <div className="descriptionbox-description">
              <p>Mô tả sản phẩm</p>
          </div>
      </div>
    </div>
  )
}

export default DecriptionBox
