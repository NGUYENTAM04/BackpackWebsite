import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import banner_ from '../Components/Assets/banner_img.png'


const LoginSignup = () => {
  const [state, setState] = useState("Đăng nhập");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        if (formData.email === 'admin@admin') {
          window.location.replace("/admin");
        } else {
          window.location.replace("http://localhost:3000/#");
        }
      } else {
        alert(responseData.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again later.");
    }
  };

  const signup = async () => {
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again later.");
    }
  };

  return (
    <div>
    {/* đăng nhập */}
      <div style={{background: "linear-gradient(rgb(247 213 209), rgba(225, 255, 234, 0.133) 60%)"}}>
        <div className="container-fluid registration-container">
          <div className="row" style={{paddingTop:"40px"}}>
            {/* Phần hình ảnh bên phải */}
            <div className="col-md-6 registration-image" > 
              <img src={banner_} alt="" style={{height:"76vh",width:"64vh",borderRadius:"10px"}}/>
            </div>
            
            {/* Vùng đăng kí bên trái */}
            <div className="col-md-6 registration-form" style={{height:"76vh",width:"64vh"}}>
              <h2>{state}</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                state === "Đăng nhập" ? login() : signup();
              }}>
                <div className="">
                  {state === "Đăng ký" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Nhập tên của bạn" className='form-control mb-3' /> : null}
                  <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Nhập Email" className='form-control mb-3' />
                  <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Nhập mật khẩu" className='form-control mb-3' />
                </div>
                <button type="submit" className="btn  my-2 w-100" style={{background: "#ff4141",color:"white"}}>{state}</button>
                {state === "Đăng nhập"
                  ? <p className="loginsignup-login">
                      <p>Bạn muốn tạo tài khoản</p><span onClick={() => { setState("Đăng ký") }} style={{}}><b>Tạo tài khoản</b></span>
                    </p>
                  : <p className="loginsignup-login ">
                      <p>Bạn muốn đăng nhập</p> <span onClick={() => { setState("Đăng nhập") }}><b>Đăng nhập</b></span>
                    </p>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    

      


    </div>
  );
};

export default LoginSignup;
