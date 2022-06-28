// import React, { useState } from 'react'
// import Defaultlayout from '../components/Defaultlayout';
// import { Form, Tabs, Button, Spin } from 'antd';
// import axios from 'axios';
// import { message } from 'antd';
// import Personal from './../components/Personal';
// import SkillsandEducation from '../components/SkillsandEducation';
// import Experience from '../components/Experience';
// const { TabPane } = Tabs;
// function Profile() {
//     const [load, setLoad] = useState(false);
//     const user = JSON.parse(localStorage.getItem("Resumebuilder-resumes"));
//     const onFinish = async (values) => {
//         setLoad(true);
//         try {
//              await axios.post("api/user/update", {
//                 ...values,
//                 _id: user._id,
//             });
//             setLoad(false);
//             message.success("Profile updated successfully");
//         } catch (error) {
//             setLoad(false);
//             message.error("Registration failed");
//         }
//     };
//     return (
//         <Defaultlayout>
//            {load && <Spin size="large" />}
//             <div className="details">
//                 <h4><b>Update details</b></h4>
//                 <hr />
//                 <Form layout="vertical" onFinish={onFinish} initialValues={user}>
//                     <Tabs defaultActiveKey="1">
//                         <TabPane tab="Personal Info" key="1">
//                             <Personal/>
//                         </TabPane>
//                         <TabPane tab="Skills and Education" key="2">
//                         <SkillsandEducation/>
//                         </TabPane>
//                         <TabPane tab=" Work Experience / Projects" key="3">
//                         <Experience/>
//                         </TabPane>
//                     </Tabs>
//                     <Button htmlType="submit">UPDATE</Button>
//                 </Form>
//             </div>
//         </Defaultlayout>
//     );
// }
// export default Profile;
"use strict";
//# sourceMappingURL=Profile.dev.js.map
