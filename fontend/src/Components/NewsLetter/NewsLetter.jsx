import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div>
        <div className="newsletter">
            <h1>Đăng ký nhận bản tin của chúng tôi và luôn cập nhật</h1>
            <p>Nhận ưu đãi độc quyền trên email của bạn</p>
            <div>
                <input type="email" placeholder="Email của bạn" />
                <button>Đăng kí</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
