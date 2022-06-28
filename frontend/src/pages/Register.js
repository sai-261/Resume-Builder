import React,{useEffect, useState} from 'react'
import '../resources/authentication.css'
import {Link,useNavigate} from 'react-router-dom'
import { Button, Checkbox, Form, Input, message, Spin } from 'antd';
import axios from 'axios'
function Register(){
    const navigate=useNavigate()
    const [load, setLoad] = useState(false);
    const onFinish =  (values) => {
        setLoad(true);
      axios.post('/api/user/registeruser',values)
      .then(res=>{
        setLoad(false);
          message.success("Registration successful")
      })
      .catch(error=>{
        setLoad(false);
        message.error("Registration failed")
          
      })
    
      };
      useEffect(() => {
        if (localStorage.getItem('Resumebuilder-resumes')) {
          navigate('/home')
        }
      })
     
    return <div className='parent'>
        {load && (<Spin size="large"/>)}
        <Form layout="vertical" onFinish={onFinish}>
            <h1>Register</h1>
            <hr />
            <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input type="password"/>
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="cpassword"
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
        ]}
      >
        <Input type="password" />
      </Form.Item>


      <Form.Item
        name="remember"
        valuePropName="checked"
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <div className="d-flex align-items-center justify-content-space-between">
      <Form.Item>
      <Link to='/login'>Click here to login</Link>
        <Button type="primary" htmlType="submit">Register</Button>
      </Form.Item>
      </div>
        </Form>
    </div>
}export default Register;