import React from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

  const onLoginHandler = async (values) => {
    console.log(values);
    try {
      const res = await Axios.post("/api/v1/user/login", values);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successful");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div>
      Login Page
      <h1> Login Page</h1>
      <div className="form-container">
        <Form className="login-form" onFinish={onLoginHandler}>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/register">Not a User Register Here</Link>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
