import React from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
// import userModel from "../../../models/userModel";

const RegisterPage = () => {
  const navigate = useNavigate();

  // const onRegisterHandler = async (values) => {
  //   try {
  //     const response = await axios.post("/api/v1/user/register", values);
  //     if (response.data.success) {
  //       message.success("Registration successful");
  //       navigate("/login");
  //     } else {
  //       message.error(response.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     message.error("Something went wrong ");
  //   }
  //   console.log(values);
  // };

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const res = await Axios.post("/api/v1/user/register", values);
      if (res.data.success) {
        message.success("Successful");
        navigate("/login");
      } else {
        message.error(res.data.message || "Register Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      RegisterPage
      <h1> Register Page</h1>
      <div className="form-container">
        {/* <Form className="register-form" onFinish={onRegisterHandler}> */}
        <Form className="register-form" onFinish={onSubmit}>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login">Already a user Login Here</Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
