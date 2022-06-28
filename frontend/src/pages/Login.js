import React, { useState, useEffect } from 'react'
import '../resources/authentication.css'
import { Button, Checkbox, Form, Input, message, Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
function Login() {
  const navigate = useNavigate()
  const [load, setLoad] = useState(false);
  const onFinish = async (values) => {
    setLoad(true);
    try {
        const user = await axios.post('/api/user/loginuser', values);
        message.success("Login successful");
        localStorage.setItem("Resumebuilder-resumes", JSON.stringify(user.data))
        setLoad(false);
         navigate('/home')
       
      } catch (error) {
        setLoad(false);
        message.error("Login failed")

      }
   
    // const user=axios.post('/api/user/loginuser',values)
    //   .then(res=>{
    //       message.success("Login successful")
    //       localStorage.setItem("Resumebuilder-resumes",JSON.stringify(user.data))
    //       setLoading(false);
    //       navigate('/home')
    //   })
    //   .catch(error=>{
    //     setLoading(false);
    //     message.error("Login failed")

    //   })
 
  };
  useEffect(() => {
    if (localStorage.getItem('Resumebuilder-resumes')) {
      navigate('/home')
    }
  })
 
  return <div className='parent'>
    {load && <Spin size="large" />}
    <h1 className='name'>Resume</h1>
    <Form layout="vertical" onFinish={onFinish}>
      <h1>Login</h1>
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
        <Input.Password />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <div className="d-flex align-items-center justify-content-space-between">
        <Form.Item>
          <Link to='/register'>Click here to register</Link>
          <Button type="primary" htmlType="submit">Login</Button>
        </Form.Item>
      </div>
    </Form>
  </div>
} export default Login;