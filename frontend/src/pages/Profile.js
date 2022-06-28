import React, { useState } from 'react'
import Defaultlayout from '../components/Defaultlayout';
import { Form, Tabs, Button, Spin } from 'antd';
import axios from 'axios';
import { message } from 'antd';
import Personal from './../components/Personal';
import SkillsandEducation from '../components/SkillsandEducation';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';

const { TabPane } = Tabs;
function Profile() {
    const [load, setLoad] = useState(false);
    const user = JSON.parse(localStorage.getItem("Resumebuilder-resumes"));
    const onFinish = async (values) => {
        setLoad(true);
        try {
            const result= await axios.post("api/user/update", {
                ...values,
                _id: user._id,
            });
            localStorage.setItem('Resumebuilder-resumes',JSON.stringify(result.data));
            setLoad(false);
            message.success("Profile updated successfully");
        } catch (error) {
            setLoad(false);
            message.error("Update failed");
        }
    };
 
    return (
        <Defaultlayout>
           {load && <Spin size="large" />}
            <div className="details">
                <h4><b>Update details</b></h4>
                <hr />
                <Form layout="vertical" onFinish={onFinish} initialValues={user}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Personal Info" key="1">
                            <Personal/>
                        </TabPane>
                        <TabPane tab="Skills and Education" key="2">
                        <SkillsandEducation/>
                        </TabPane>
                        <TabPane tab=" Work Experience / Projects" key="3">
                        <Experience/>
                        </TabPane>
                        <TabPane tab=" Achievements" key="4">
                        <Achievements/>
                        </TabPane>
                    </Tabs>

                    <Button htmlType="submit">UPDATE</Button>
                </Form>
            </div>
        </Defaultlayout>
    );
}

export default Profile;