import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const onLoginHandler = (values) => {
    console.log(values);
  };
  return (
    <div>
      Login Page
      <h1> Login Page</h1>
      <div className="form-container">
        <Form className="login-form" onFinish={onLoginHandler}>
          <Form.Item label="Username" name="username">
            <Input type="username" required />
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
