import React, { useState } from "react";
import useAxios from "../../../../Context/API/UseAxios";
import axios from "axios";
const SignUp = ({ onSignUpSuccess }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const data = useAxios("https://673c32f596b8dcd5f3f8dda8.mockapi.io/admin");

  const [errors, setErrors] = useState(" ");
  const handlePost = async () => {
    try {
      const res = await axios.post(
        "https://673c32f596b8dcd5f3f8dda8.mockapi.io/admin",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: "customer",
        }
      );
    } catch (error) {
      console.log("Error post data", errors);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.comfirmPassword) {
      setErrors("Mật khẩu và xác nhận mật khẩu không khớp!");
    }else if(data.find((item) => item.email === formData.email)){
        setErrors("Email đã tồn tại!");
    }else {
      handlePost();
      setTimeout(() => {
          alert("Đăng ký thành công");
          onSignUpSuccess();
      }, 1000);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Họ và tên của bạn"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="email"
        placeholder="Email của bạn"
        value={formData.eamil}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Mật khẩu của bạn"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="comfirmPassword"
        placeholder="Nhập lại mật khẩu "
        value={formData.comfirmPassword}
        onChange={handleChange}
        required
      />
      
      <span>{errors}</span>
      <button type="submit">SignUp</button>
    </form>
  );
};

export default SignUp;
