// import React from 'react'
// import './../resources/defaultlayout.css'
// import { Button,Dropdown,Menu} from 'antd';
// import {Link, useNavigate} from 'react-router-dom'
// import { UserOutlined ,LogoutOutlined } from "@ant-design/icons";
// function Defaultlayout(props) {
//   const user = JSON.parse(localStorage.getItem("Resumebuilder-resumes"));
//   const navigate = useNavigate();
//   const menu = (
//     <Menu>
//       <Menu.Item>
//       <Link to="/home">Home</Link>
//       </Menu.Item>
//       <Menu.Item>
//         <Link to="/profile">Profile</Link>
//       </Menu.Item>
//       <Menu.Item
//         onClick={() => {
//           localStorage.removeItem("Resumebuilder-resumes");
//           navigate("/login");
//         }}
//       >
//         <span>Logout</span>
//       </Menu.Item>
//     </Menu>
//   );
//     return (
//         <div className='layout'>
//             <div className='header'>
//                 <h1>Resume</h1>
//                 <Dropdown overlay={menu} placement="bottomLeft">
//                     <Button icon={<UserOutlined/>}>{user.username}</Button>
//                 </Dropdown>
//             </div>
//             <div className='content'>
//                 {props.children}
//             </div>
//         </div>
//     )
// } export default Defaultlayout;
"use strict";
//# sourceMappingURL=Defaultlayout.dev.js.map
